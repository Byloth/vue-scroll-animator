import BaseAnimator from "../animators";
import ClassAnimator from "../animators/classes";
import CssPropertyAnimator from "../animators/cssProperties";

import AnimationOptions from "./options";

export default class ScrollAnimation
{
    public static readonly DEFAULT_OPTIONS = {
        classes: [],
        cssProperties: []
    };

    public static Normalize(value: number)
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
    protected _animators!: BaseAnimator[];

    protected _lastRatio: number;
    protected _lastVerticalScroll: number;

    protected _computeRatio!: (scrollValue: number) => number;

    public constructor(options: AnimationOptions)
    {
        options = { ...ScrollAnimation.DEFAULT_OPTIONS, ...options };

        this._enabled = true;

        this._lastRatio = 0;
        this._lastVerticalScroll = 0;

        this._init(options);
        this._compile(options);
    }

    protected _init(options: AnimationOptions): void
    {
        this._animators = [];

        for (const classOptions of options.classes!)
        {
            this._animators.push(new ClassAnimator({ target: options.target, ...classOptions }));
        }

        for (const cssPropertyOptions of options.cssProperties!)
        {
            this._animators.push(new CssPropertyAnimator({ target: options.target, ...cssPropertyOptions }));
        }
    }
    protected _compile(options: AnimationOptions): void
    {
        if (options.computeRatio !== undefined)
        {
            this._computeRatio = options.computeRatio;
        }
        else if (options.endingValue === undefined)
        {
            const startValue = options.startingValue;

            if (options.maxDifference === undefined)
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
                const maxDifference = Math.abs(options.maxDifference);

                this._computeRatio = (scrollValue: number): number =>
                {
                    if (scrollValue <= startValue)
                    {
                        return 0;
                    }
                    else
                    {
                        const difference = scrollValue - this._lastVerticalScroll;
                        const partialRatio = difference / maxDifference;

                        return ScrollAnimation.Normalize(partialRatio + this._lastRatio);
                    }
                };
            }

        }
        else if (options.startingValue <= options.endingValue)
        {
            const startValue = options.startingValue;
            const endValue = options.endingValue;

            if (options.maxDifference === undefined)
            {
                const difference = options.endingValue - options.startingValue;

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
                const maxDifference = Math.abs(options.maxDifference);

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
                        const difference = scrollValue - this._lastVerticalScroll;
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
    }

    protected _getHorizontalScroll(element?: Element): number
    {
        // if (element !== undefined)
        // {
        //     return element.scrollLeft;
        // }

        return window.pageXOffset;
    }
    protected _getVerticalScroll(element?: Element): number
    {
        // if (element !== undefined)
        // {
        //     return element.scrollTop;
        // }

        return window.pageYOffset;
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
        const windowWidth = window.innerWidth;
        // const windowHeight = window.innerHeight;

        // const horizontalScroll = this._getHorizontalScroll();
        const verticalScroll = this._getVerticalScroll();

        const ratio = this._computeRatio(verticalScroll);

        for (const animator of this._animators.filter((a: BaseAnimator) => a.canBeApplied(windowWidth)))
        {
            animator.update(ratio);
        }

        this._lastRatio = ratio;
        this._lastVerticalScroll = verticalScroll;
    }
}

export { AnimationOptions };
