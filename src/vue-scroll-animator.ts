/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

//
// Based on: https://github.com/janpaepke/ScrollMagic
//

import _Vue from "vue";

import ScrollAnimation, { AnimationOptions } from "./scroll-animation";

export default class VueScrollAnimator
{
    public static install(Vue: typeof _Vue, configuration?: unknown): void
    {
        const self = new VueScrollAnimator();

        self.init();

        Vue.mixin({
            data: (): { _scrollAnimations: ScrollAnimation[] } => ({ _scrollAnimations: [] }),

            destroyed: function(): void
            {
                (this as Vue)._scrollAnimations = [];
            }
        });

        Vue.prototype.$initScrollAnimation = function(options: AnimationOptions): ScrollAnimation
        {
            const animation = self.animate.call(self, { target: this.$el, ...options });

            this._scrollAnimations.push(animation);

            return animation;
        };
        Vue.prototype.$destroyScrollAnimation = function(animation: ScrollAnimation): void
        {
            const remove = (animations: ScrollAnimation[], animation: ScrollAnimation) =>
            {
                const index = animations.indexOf(animation);

                if (index !== -1)
                {
                    animations.splice(index, 1);
                }
                else
                {
                    throw new Error(`The animation object "${animation}" doesn't exists in the animations array.`);
                }
            };

            self.deanimate.call(self, animation);
        };
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
                    for (const animation of this._animations.filter((a: ScrollAnimation) => a.isEnabled))
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
        if (options.target === undefined)
        {
            throw new Error("'target' option must be correctly valorized.");
        }

        const animation = new ScrollAnimation(options);
        this._animations.push(animation);

        return animation;
    }
    public deanimate(animation: ScrollAnimation): void
    {
        this._animations = this._animations.filter((item) => item !== animation);

        animation.disable();
    }

    public init(): void
    {
        window.addEventListener("resize", this._eventListener, { capture: true, passive: true });
        window.addEventListener("scroll", this._eventListener, { capture: true, passive: true });
    }
    public destroy(): void
    {
        window.removeEventListener("resize", this._eventListener);
        window.removeEventListener("scroll", this._eventListener);

        if (this._requestId !== undefined)
        {
            window.cancelAnimationFrame(this._requestId);

            this._requestId = undefined;
        }
    }
}
