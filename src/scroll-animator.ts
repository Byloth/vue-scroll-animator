//
// Based on: https://github.com/janpaepke/ScrollMagic
//

import Animation from "./models/animation.js";
import type { AnimationOptions } from "./types/animation.js";

export default class ScrollAnimator
{
    protected _isUpdating: boolean;
    protected _requestId?: number;

    protected _animations: Animation[];

    protected _eventListener = (evt: Event): void =>
    {
        if (this._isUpdating === false)
        {
            this._isUpdating = true;

            this._requestId = window.requestAnimationFrame((timestamp: number) =>
            {
                if (this._isUpdating === true)
                {
                    this._animations.forEach((animation) => animation.update());
                    this._isUpdating = false;
                }
            });
        }
    };

    public constructor(options?: unknown)
    {
        this._isUpdating = false;
        this._animations = [];
    }

    public initialize(): void
    {
        window.addEventListener("resize", this._eventListener, { capture: true, passive: true });
        window.addEventListener("scroll", this._eventListener, { capture: true, passive: true });
    }
    public destroy(): void
    {
        this.clean();

        window.removeEventListener("resize", this._eventListener);
        window.removeEventListener("scroll", this._eventListener);

        if (this._requestId !== undefined)
        {
            window.cancelAnimationFrame(this._requestId);

            this._requestId = undefined;
        }
    }

    public animate(options: AnimationOptions): Animation
    {
        const animation = new Animation(options);

        this._animations.push(animation);

        return animation;
    }
    public remove(animation: Animation): void
    {
        const index = this._animations.indexOf(animation);
        if (index === -1)
        {
            throw new Error(`The animation object "${animation}" doesn't exists in the animations array.`);
        }

        animation.destroy();

        this._animations.splice(index, 1);
    }

    public clean(): void
    {
        this._animations.forEach((animation) => animation.destroy());
        this._animations = [];
    }
}
