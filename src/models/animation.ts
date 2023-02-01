import { ValueException } from "@byloth/exceptions";

import type Animator from "./animator/core.js";
import { ClassAnimator, StyleAnimator } from "./animator/index.js";

import type { ComponentInstance } from "../types/index.js";
import type { AnimationOptions, RatioAnimation, EndlessAnimation, CustomAnimation } from "../types/animation/index.js";

export default class Animation
{
    public static get DEFAULT_OPTIONS()
    {
        return {
            startValue: 0,
            orientation: "vertical",

            easing: (input: number) => input,
            speed: 1,

            classes: [],
            styles: [],
            customs: []
        };
    }

    public static Normalize(value: number): number
    {
        if (value <= 0)
        {
            return 0;
        }
        if (value >= 1)
        {
            return 1;
        }

        return value;
    }

    protected _enabled: boolean;
    protected _animators: Animator[];

    protected _lastRatio: number;
    protected _lastScrollValue: number;

    protected _computeRatio: (scrollValue: number) => number;
    protected _getScrollValue: (element?: Element) => number;

    public get isEnabled(): boolean
    {
        return this._enabled;
    }

    public constructor(options: RatioAnimation);
    public constructor(options: EndlessAnimation);
    public constructor(options: CustomAnimation);
    public constructor(options: AnimationOptions)
    {
        const _options = { ...Animation.DEFAULT_OPTIONS, ...options };
        if (_options.target === undefined)
        {
            throw new ValueException("'target' option must be correctly valorized.");
        }

        this._enabled = true;
        this._animators = [];

        this._lastRatio = 0;
        this._lastScrollValue = 0;

        for (const classOptions of _options.classes)
        {
            this._animators.push(new ClassAnimator({ target: _options.target, ...classOptions }));
        }
        for (const styleOptions of _options.styles)
        {
            this._animators.push(new StyleAnimator({ target: _options.target, ...styleOptions }));
        }
        //
        // TODO: Handle `_options.customs`
        //

        if (!this._animators.length)
        {
            throw new ValueException(
                "At least one property between 'classes', 'styles'" +
                " or 'customs' needs to be correctly valorized."
            );
        }

        if (_options.computeRatio !== undefined)
        {
            this._computeRatio = _options.computeRatio;
        }
        else if (_options.endValue !== undefined)
        {
            if (_options.startValue > _options.endValue)
            {
                throw new ValueException("'startValue' option must be less than or equal to 'endValue'.");
            }

            const startValue = _options.startValue;
            const endValue = _options.endValue;

            const difference = endValue - startValue;

            this._computeRatio = (scrollValue: number): number =>
            {
                if (scrollValue <= startValue)
                {
                    return 0;
                }
                if (scrollValue >= endValue)
                {
                    return 1;
                }

                return ((scrollValue - startValue) / difference);
            };
        }
        else
        {
            const startValue = _options.startValue;

            if (_options.boundary !== undefined)
            {
                if (_options.boundary < 0)
                {
                    throw new ValueException("'boundary' option must be greater than 0.");
                }

                const boundary = _options.boundary;

                this._computeRatio = (scrollValue: number): number =>
                {
                    if (scrollValue <= startValue)
                    {
                        return 0;
                    }

                    const difference = scrollValue - this._lastScrollValue;
                    const partialRatio = difference / boundary;

                    return Animation.Normalize(partialRatio + this._lastRatio);
                };
            }
            else
            {
                this._computeRatio = (scrollValue: number): number =>
                {
                    if (scrollValue <= startValue)
                    {
                        return 0;
                    }

                    return (scrollValue - startValue);
                };
            }
        }

        if (_options.orientation === "horizontal")
        {
            // if (element !== undefined)
            // {
            //     this._getScrollValue = (): number => element.scrollLeft;
            // }

            this._getScrollValue = (): number => window.pageXOffset;
        }
        //
        // TODO: Gestire lo scroll legato ad un elemento specifico.
        //
        else if (_options.orientation === "vertical")
        {
            // if (element !== undefined)
            // {
            //     this._getScrollValue = (): number => element.scrollTop;
            // }

            this._getScrollValue = (): number => window.pageYOffset;
        }
        else
        {
            throw new ValueException(`'orientation' option value must be equal to "horizontal" or "vertical".`);
        }

        this.update();
    }

    public enable(): void
    {
        this._enabled = true;
    }
    public disable(): void
    {
        this._enabled = false;
    }

    public update(): void
    {
        const scrollValue = this._getScrollValue();
        if (scrollValue === this._lastScrollValue)
        {
            return;
        }

        const ratio = this._computeRatio(scrollValue);
        if (ratio === this._lastRatio)
        {
            return;
        }

        this._animators
            .filter((animator) => animator.isEnabled)
            .forEach((animator) => animator.update(ratio));

        this._lastRatio = ratio;
        this._lastScrollValue = scrollValue;
    }

    public destroy(): void
    {
        this.disable();

        this._animators = [];
    }
}

export type ScrollAnimate = (this: ComponentInstance, options: AnimationOptions) => Animation;