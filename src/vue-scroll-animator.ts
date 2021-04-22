/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

//
// Based on: https://github.com/janpaepke/ScrollMagic
//

import _Vue from "vue";

import ScrollAnimation, { AnimationOptions } from "./scroll-animation";

interface VueScrollAnimatorData { _scrollAnimations: ScrollAnimation[]; }

export default class VueScrollAnimator
{
    public static install(Vue: typeof _Vue, configuration?: unknown): void
    {
        const scrollAnimator = new VueScrollAnimator();

        Vue.mixin({
            data: (): VueScrollAnimatorData => ({ _scrollAnimations: [] }),
            destroyed: function(): void
            {
                const self = (this as Vue);

                for (const animation of self._scrollAnimations)
                {
                    scrollAnimator.remove(animation);
                }

                self._scrollAnimations = [];
            }
        });

        Vue.prototype.$scrollAnimate = function(options: AnimationOptions): ScrollAnimation
        {
            const animation = scrollAnimator.animate({ target: this.$el, ...options });

            this._scrollAnimations.push(animation);

            return animation;
        };

        scrollAnimator.init();
    }

    protected _isUpdating: boolean;
    protected _requestId?: number;

    protected _animations: ScrollAnimation[];

    public constructor()
    {
        this._isUpdating = false;

        this._animations = [];
    }

    protected _eventListener = (evt: Event): void =>
    {
        if (this._isUpdating === false)
        {
            this._isUpdating = true;

            this._requestId = window.requestAnimationFrame((timestamp: number) =>
            {
                if (this._isUpdating === true)
                {
                    for (const animation of this._animations)
                    {
                        animation.update();
                    }

                    this._isUpdating = false;
                }
            });
        }
    };

    public animate(options: AnimationOptions): ScrollAnimation
    {
        const animation = new ScrollAnimation(options);

        this._animations.push(animation);

        return animation;
    }

    public init(): void
    {
        window.addEventListener("resize", this._eventListener, { capture: true, passive: true });
        window.addEventListener("scroll", this._eventListener, { capture: true, passive: true });
    }
    public destroy(): void
    {
        this.removeAll();

        window.removeEventListener("resize", this._eventListener);
        window.removeEventListener("scroll", this._eventListener);

        if (this._requestId !== undefined)
        {
            window.cancelAnimationFrame(this._requestId);

            this._requestId = undefined;
        }
    }

    public remove(animation: ScrollAnimation): void
    {
        const index = this._animations.indexOf(animation);

        if (index !== -1)
        {
            this._animations.splice(index, 1);
        }
        else
        {
            throw new Error(`The animation object "${animation}" doesn't exists in the animations array.`);
        }

        animation.destroy();
    }
    public removeAll(): void
    {
        for (const animation of this._animations)
        {
            animation.destroy();
        }

        this._animations = [];
    }
}
