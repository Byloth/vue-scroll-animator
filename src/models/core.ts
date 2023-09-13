import type { UpdatableCoreOptions } from "../types/core";

export default abstract class UpdatableCore
{
    protected _enabled: boolean;

    protected _target: HTMLElement;
    protected _mediaQuery?: MediaQueryList;

    protected _onChange?: (evt: MediaQueryListEvent) => void;

    public get isEnabled(): boolean
    {
        return this._enabled;
    }

    public constructor(options: UpdatableCoreOptions)
    {
        this._target = options.target!;

        if (options.mediaQuery !== undefined)
        {
            this._onChange = (evt: MediaQueryListEvent): void =>
            {
                if (evt.matches)
                {
                    return this.enable();
                }

                return this.disable();
            };

            this._mediaQuery = matchMedia(options.mediaQuery);
            this._mediaQuery.addEventListener("change", this._onChange);

            this._enabled = this._mediaQuery.matches;
        }
        else
        {
            this._enabled = true;
        }
    }

    public enable(): void
    {
        this._enabled = true;
    }
    public disable(): void
    {
        this._enabled = false;
    }

    public abstract update(ratio: number): void;

    public destroy(): void
    {
        this._mediaQuery?.removeEventListener("change", this._onChange!);
    }
}
