import type { Style, StyleProperty } from "../../types/animator/core.js";
import type { StyleAnimatorOptions } from "../../types/animator/index.js";

import Animator from "./core.js";

export default class StyleAnimator<T = number> extends Animator
{
    public static get DEFAULT_OPTIONS()
    {
        return { startValue: 0 };
    }

    protected _computeValue: (ratio: number) => T;
    protected _computeStyle: (value: T) => Style;

    public constructor(options: StyleAnimatorOptions<T>)
    {
        const _options = { ...StyleAnimator.DEFAULT_OPTIONS, ...options };
        super(_options);

        if (_options.computeValue !== undefined)
        {
            this._computeValue = _options.computeValue;
        }
        else if (_options.endValue === undefined)
        {
            const startValue = _options.startValue;

            this._computeValue = (ratio: number): T => (startValue + ratio) as T;
        }
        else if (_options.startValue <= _options.endValue)
        {
            const startValue = _options.startValue;
            const difference = _options.endValue - _options.startValue;

            this._computeValue = (ratio: number): T => ((difference * ratio) + startValue) as T;
        }
        else
        {
            const startValue = _options.endValue;
            const difference = _options.startValue - _options.endValue;

            this._computeValue = (ratio: number): T => ((difference * (1 - ratio)) + startValue) as T;
        }

        this._computeStyle = _options.computeStyle;
    }

    public update(ratio: number): void
    {
        const _value = this._computeValue(ratio);
        const _style = this._computeStyle(_value);

        for (const [key, value] of Object.entries(_style))
        {
            const property = key as StyleProperty;

            this._target.style[property] = value;
        }
    }
}
