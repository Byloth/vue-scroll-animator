import { BaseAnimator, ClassAnimator, CssPropertyAnimator } from "./animators";
import { ClassAnimatorOptions, CssPropertyAnimatorOptions } from "./animators";

export type Orientation = "horizontal" | "vertical";

export interface AnimationOptions
{
    target?: HTMLElement;

    startingValue: number;
    maxDifference?: number;
    endingValue?: number;
    orientation?: Orientation;

    classes?: ClassAnimatorOptions[];
    cssProperties?: CssPropertyAnimatorOptions[];

    computeRatio?: (scrollValue: number) => number;
}

export default class ScrollAnimation
{
    public static readonly DEFAULT_OPTIONS = {
        orientation: "vertical" as Orientation,

        classes: [],
        cssProperties: []
    };

    public static Normalize(value: number): number
    {
        if (value <= 0)
        {
            return 0;
        }
        else if (value >= 1)
        {
            return 1;
        }
        else
        {
            return value;
        }
    }

    protected _enabled: boolean;
    protected _animators: BaseAnimator[];

    protected _lastRatio: number;
    protected _lastScrollValue: number;

    protected _computeRatio: (scrollValue: number) => number;
    protected _getScrollValue: (element?: Element) => number;

    public constructor(options: AnimationOptions)
    {
        const _options = { ...ScrollAnimation.DEFAULT_OPTIONS, ...options };

        this._enabled = true;
        this._animators = [];

        this._lastRatio = 0;
        this._lastScrollValue = 0;

        for (const classOptions of _options.classes!)
        {
            this._animators.push(new ClassAnimator({ target: _options.target, ...classOptions }));
        }

        for (const cssPropertyOptions of _options.cssProperties!)
        {
            this._animators.push(new CssPropertyAnimator({ target: _options.target, ...cssPropertyOptions }));
        }

        if (_options.computeRatio !== undefined)
        {
            this._computeRatio = _options.computeRatio;
        }
        else if (_options.endingValue === undefined)
        {
            const startValue = _options.startingValue;

            if (_options.maxDifference === undefined)
            {
                this._computeRatio = (scrollValue: number): number =>
                {
                    if (scrollValue <= startValue)
                    {
                        return 0;
                    }
                    else
                    {
                        return (scrollValue - startValue);
                    }
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
                    else
                    {
                        const difference = scrollValue - this._lastScrollValue;
                        const partialRatio = difference / maxDifference;

                        return ScrollAnimation.Normalize(partialRatio + this._lastRatio);
                    }
                };
            }

        }
        else if (_options.startingValue <= _options.endingValue)
        {
            const startValue = _options.startingValue;
            const endValue = _options.endingValue;

            if (_options.maxDifference === undefined)
            {
                const difference = _options.endingValue - _options.startingValue;

                this._computeRatio = (scrollValue: number): number =>
                {
                    if (scrollValue <= startValue)
                    {
                        return 0;
                    }
                    else if (scrollValue >= endValue)
                    {
                        return 1;
                    }
                    else
                    {
                        return ((scrollValue - startValue) / difference);
                    }
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
                    else if (scrollValue >= endValue)
                    {
                        return 1;
                    }
                    else
                    {
                        const difference = scrollValue - this._lastScrollValue;
                        const partialRatio = difference / maxDifference;

                        return ScrollAnimation.Normalize(partialRatio + this._lastRatio);
                    }
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
            //     return element.scrollLeft;
            // }

            this._getScrollValue = (): number => window.pageXOffset;
        }
        else if (_options.orientation === "vertical")
        {
            // if (element !== undefined)
            // {
            //     return element.scrollTop;
            // }

            this._getScrollValue = (): number => window.pageYOffset;
        }
        else
        {
            throw new Error("'orientation' option value must be equal to \"horizontal\" or \"vertical\".");
        }

        this.update();
    }

    public get isEnabled(): boolean
    {
        return this._enabled;
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
        const ratio = this._computeRatio(scrollValue);

        for (const animator of this._animators.filter((a: BaseAnimator) => a.canBeApplied()))
        {
            animator.update(ratio);
        }

        this._lastRatio = ratio;
        this._lastScrollValue = scrollValue;
    }
}
