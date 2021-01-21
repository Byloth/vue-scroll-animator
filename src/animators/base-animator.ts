export interface BaseAnimatorOptions
{
    target?: HTMLElement;

    minWidth?: number;
    maxWidth?: number;
}

export default abstract class BaseAnimator
{
    protected _lastRatioValue?: number;
    protected _lastCanBeApplied?: boolean;

    protected _target: HTMLElement;

    protected _canBeApplied: () => boolean;

    public get canBeApplied(): boolean
    {
        const canBeApplied = this._canBeApplied();

        if (canBeApplied !== this._lastCanBeApplied)
        {
            this._lastRatioValue = undefined;
            this._lastCanBeApplied = canBeApplied;
        }

        return canBeApplied;
    }

    public constructor(options: BaseAnimatorOptions)
    {
        this._target = options.target!;

        if (options.minWidth !== undefined)
        {
            const minWidth = options.minWidth;

            if (options.maxWidth === undefined)
            {
                this._canBeApplied = (): boolean => (minWidth <= window.innerWidth);
            }
            else if (minWidth < options.maxWidth)
            {
                const maxWidth = options.maxWidth;

                this._canBeApplied = (): boolean =>
                {
                    const windowWidth = window.innerWidth;

                    return ((minWidth <= windowWidth) && (windowWidth <= maxWidth));
                };
            }
            else if (minWidth === options.maxWidth)
            {
                this._canBeApplied = (): boolean => (minWidth === window.innerWidth);
            }
            else
            {
                throw new Error("'minWidth' option must be less than or equal to 'maxWidth'.");
            }
        }
        else if (options.maxWidth !== undefined)
        {
            const maxWidth = options.maxWidth;

            this._canBeApplied = (): boolean => (window.innerWidth <= maxWidth);
        }
        else
        {
            this._canBeApplied = (): boolean => true;
        }
    }

    protected abstract _update(ratioValue: number): void;

    public update(ratioValue: number): void
    {
        if ((this.canBeApplied) && (ratioValue !== this._lastRatioValue))
        {
            this._update(ratioValue);

            this._lastRatioValue = ratioValue;
        }
    }
}
