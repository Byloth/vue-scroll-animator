import BaseAnimatorOptions from "./options";

export default abstract class BaseAnimator
{
    protected _lastRatioValue?: number;
    protected _lastCanBeApplied?: boolean;

    protected _target: HTMLElement;

    protected _canBeApplied!: (windowWidth: number) => boolean;

    public constructor(options: BaseAnimatorOptions)
    {
        this._target = options.target!;

        this._compile(options);
    }

    protected _compile(options: BaseAnimatorOptions): void
    {
        if (options.minWidth !== undefined)
        {
            const minWidth = options.minWidth;

            if (options.maxWidth === undefined)
            {
                this._canBeApplied = (windowWidth: number): boolean => (minWidth <= windowWidth);
            }
            else if (minWidth < options.maxWidth)
            {
                const maxWidth = options.maxWidth;

                this._canBeApplied = (windowWidth: number): boolean =>
                    ((minWidth <= windowWidth) && (windowWidth <= maxWidth));
            }
            else if (minWidth === options.maxWidth)
            {
                this._canBeApplied = (windowWidth: number): boolean => (minWidth === windowWidth);
            }
            else
            {
                throw new Error("'minWidth' option must be less than or equal to 'maxWidth'.");
            }
        }
        else if (options.maxWidth !== undefined)
        {
            const maxWidth = options.maxWidth;

            this._canBeApplied = (windowWidth: number): boolean => (windowWidth <= maxWidth);
        }
        else
        {
            this._canBeApplied = (windowWidth: number): boolean => (true);
        }
    }

    protected abstract _update(ratioValue: number): void;

    public canBeApplied(windowWidth: number): boolean
    {
        const canBeApplied = this._canBeApplied(windowWidth);

        if (canBeApplied !== this._lastCanBeApplied)
        {
            this._lastRatioValue = undefined;
            this._lastCanBeApplied = canBeApplied;
        }

        return canBeApplied;
    }

    public update(ratioValue: number): void
    {
        if (ratioValue !== this._lastRatioValue)
        {
            const SLOW_EXECUTION_THRESHOLD = 0.25;

            const start = performance.now();
            this._update(ratioValue);
            const time = performance.now() - start;

            if (time > SLOW_EXECUTION_THRESHOLD)
            {
                console.warn(`Slow update: execution took ${time}ms`);
            }

            this._lastRatioValue = ratioValue;
        }
    }
}

export { BaseAnimatorOptions };
