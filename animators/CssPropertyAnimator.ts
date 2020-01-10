import BaseAnimator, { BaseAnimatorOptions } from "./BaseAnimator";

interface CssPropertyAnimatorOptions extends BaseAnimatorOptions
{
    name: string;
    unit?: string;

    startValue: number;
    endValue?: number;

    // direction?: string; -> normal / inverse
    // speed?: number; -> 1x / 2x / 0.5x / ...
    // timing?: string; -> linear / ease / cubic

    computeValue?: (ratioValue: number) => number;
}

export { CssPropertyAnimatorOptions };

export default class CssPropertyAnimator extends BaseAnimator
{
    public static DEFAULT_OPTIONS = {

        unit: "px"
    };

    protected _name: string;
    protected _unit: string;

    protected _computeValue!: (ratioValue: number) => number;

    public constructor(options: CssPropertyAnimatorOptions)
    {
        options = { ...CssPropertyAnimator.DEFAULT_OPTIONS, ...options};

        super(options);

        this._name = options.name;
        this._unit = options.unit!;
    }

    protected _compile(options: CssPropertyAnimatorOptions): void
    {
        super._compile(options);

        if (options.computeValue !== undefined)
        {
            this._computeValue = options.computeValue;
        }
        else if (options.endValue === undefined)
        {
            const startValue = options.startValue;

            this._computeValue = (ratioValue: number): number => (startValue + ratioValue);
        }
        else if (options.startValue <= options.endValue)
        {
            const startValue = options.startValue;
            const difference = options.endValue - options.startValue;

            this._computeValue = (ratioValue: number): number => ((difference * ratioValue) + startValue);
        }
        else
        {
            const startValue = options.endValue;
            const difference = options.startValue - options.endValue;

            this._computeValue = (ratioValue: number): number => ((difference * (1 - ratioValue)) + startValue);
        }
    }

    protected _update(ratioValue: number): void
    {
        const propertyValue = this._computeValue(ratioValue);

        this.setCssPropertyValue(`${propertyValue}${this._unit}`);
    }

    public getCssPropertyValue(): string
    {
        return this._target.style.getPropertyValue(this._name);
    }
    public setCssPropertyValue(value: string): void
    {
        this._target.style.setProperty(this._name, value);
    }
}
