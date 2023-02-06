import type { CoreAnimatorOptions } from "@src/types/animator/core.js";

export default abstract class Animator
{
    protected _enabled: boolean;

    protected _target: HTMLElement;
    protected _mediaQuery?: MediaQueryList;

    public get isEnabled(): boolean
    {
        return this._enabled;
    }

    public constructor(options: CoreAnimatorOptions)
    {
        this._target = options.target!;

        if (options.mediaQuery !== undefined)
        {
            this._mediaQuery = matchMedia(options.mediaQuery);
            this._mediaQuery.addEventListener("change", (evt) => { this._enabled = evt.matches; });

            this._enabled = this._mediaQuery.matches;
        }
        else
        {
            this._enabled = true;
        }
    }

    public abstract update(ratio: number): void;
}
