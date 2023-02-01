import type { App, ComponentPublicInstance, Plugin } from "vue";

import type ScrollAnimation from "./scroll-animation.js";
import type { AnimationOptions } from "./scroll-animation.js";

import ScrollAnimator from "./scroll-animator.js";

export const createScrollAnimator = (options?: unknown): Plugin =>
{
    return {
        install: (app: App): void =>
        {
            const $scrollAnimator = new ScrollAnimator(options);
            const $scrollAnimate = function(this: ComponentPublicInstance | undefined, options: AnimationOptions): ScrollAnimation
            {
                // TODO: Understand what `this` is inside this context.
                //

                const animation = $scrollAnimator.animate({ target: this?.$el, ...options });

                //
                // TBD: How to automatically register something on unmounted inside this context?
                //
                // interface VueScrollAnimatorData { _scrollAnimations: ScrollAnimation[]; }
                //
                // Vue.mixin({
                //     data: (): VueScrollAnimatorData => ({ _scrollAnimations: [] }),
                //     destroyed: function(): void
                //     {
                //         const self = (this as Vue);

                //         for (const animation of self._scrollAnimations)
                //         {
                //             scrollAnimator.remove(animation);
                //         }

                //         self._scrollAnimations = [];
                //     }
                // });

                return animation;
            };

            app.config.globalProperties.$scrollAnimate = $scrollAnimate;

            // app.provide(InjectionKeys.$vuert, $vuert);

            $scrollAnimator.init();
        }
    };
};
