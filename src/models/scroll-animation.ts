import { Animator, ClassAnimator, StyleAnimator } from "./animator/index.js";

import type { ComponentInstance } from "../types/index.js";
import type { AnimationOptions } from "../types/animation.js";

export type ScrollAnimate = (this: ComponentInstance, options: AnimationOptions) => ScrollAnimation;

export default class ScrollAnimation
{
    public static get DEFAULT_OPTIONS()
    {
        return {
            orientation: "vertical",

            classes: [],
            styles: []
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

    public constructor(options: AnimationOptions)
    {
        const _options = { ...ScrollAnimation.DEFAULT_OPTIONS, ...options };

        if (options.target === undefined)
        {
            throw new Error("'target' option must be correctly valorized.");
        }

        this._enabled = true;
        this._animators = [];

        this._lastRatio = 0;
        this._lastScrollValue = 0;

        for (const classOptions of _options.classes!)
        {
            this._animators.push(new ClassAnimator({ target: _options.target, ...classOptions }));
        }

        for (const styleOptions of _options.styles!)
        {
            this._animators.push(new StyleAnimator({ target: _options.target, ...styleOptions }));
        }

        if (_options.computeRatio !== undefined)
        {
            this._computeRatio = _options.computeRatio;
        }
        else if (_options.endValue === undefined)
        {
            const startValue = _options.startValue;

            if (_options.maxDifference === undefined)
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
            else
            {
                const maxDifference = Math.abs(_options.maxDifference);

                this._computeRatio = (scrollValue: number): number =>
                {
                    if (scrollValue <= startValue)
                    {
                        return 0;
                    }

                    const difference = scrollValue - this._lastScrollValue;
                    const partialRatio = difference / maxDifference;

                    return ScrollAnimation.Normalize(partialRatio + this._lastRatio);
                };
            }

        }
        else if (_options.startValue <= _options.endValue)
        {
            const startValue = _options.startValue;
            const endValue = _options.endValue;

            if (_options.maxDifference === undefined)
            {
                const difference = _options.endValue - _options.startValue;

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
                const maxDifference = Math.abs(_options.maxDifference);

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

                    const difference = scrollValue - this._lastScrollValue;
                    const partialRatio = difference / maxDifference;

                    return ScrollAnimation.Normalize(partialRatio + this._lastRatio);
                };
            }
        }
        else
        {
            throw new Error("'startValue' option must be less than or equal to 'endValue'.");
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
            throw new Error(`'orientation' option value must be equal to "horizontal" or "vertical".`);
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
        if (this.isEnabled === true)
        {
            const scrollValue = this._getScrollValue();
            if (scrollValue === this._lastScrollValue)
            {
                return;
            }

            const ratio = this._computeRatio(scrollValue);

            this._animators.forEach((animator) => animator.update(ratio));

            this._lastRatio = ratio;
            this._lastScrollValue = scrollValue;
        }
    }

    public destroy(): void
    {
        this.disable();

        this._animators = [];
    }
}
