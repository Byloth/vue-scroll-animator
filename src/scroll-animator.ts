//
// Based on: https://github.com/janpaepke/ScrollMagic
//

import { ReferenceException } from "@byloth/exceptions";

import Animation from "./models/animation.js";
import type { AnimationOptions, RatioAnimation, EndlessAnimation, CustomAnimation } from "./types/animation/index.js";

export default class ScrollAnimator
{
    public static readonly VERSION: string = "3.0.0-rc.2";

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
                    this._animations
                        .filter((animation) => animation.isEnabled)
                        .forEach((animation) => animation.update());

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

    public animate(options: RatioAnimation): Animation;
    public animate(options: EndlessAnimation): Animation;
    public animate(options: CustomAnimation): Animation;
    public animate(options: AnimationOptions): Animation
    {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const animation = new Animation(options as any);

        this._animations.push(animation);

        return animation;
    }
    public remove(animation: Animation): void
    {
        const index = this._animations.indexOf(animation);
        if (index === -1)
        {
            throw new ReferenceException(`The animation object "${animation}" doesn't exists in the animations array.`);
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
