import { inject, onScopeDispose } from "vue";
import type { App, Plugin } from "vue";

import { RuntimeException } from "@byloth/exceptions";

import { InjectionKeys } from "./core.js";
import type Animation from "./models/animation.js";
import type { ScrollAnimate } from "./models/animation.js";
import ScrollAnimator from "./scroll-animator.js";
import type { ComponentInstance } from "./types/index.js";
import type { AnimationOptions } from "./types/animation/index.js";

export const createScrollAnimator = (options?: unknown): Plugin =>
{
    return {
        install: (app: App): void =>
        {
            const $scrollAnimator = new ScrollAnimator(options);
            const $scrollAnimate = function(this: ComponentInstance, options: AnimationOptions): Animation
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const animation = $scrollAnimator.animate({ target: this?.$el, ...options } as any);

                onScopeDispose(() => $scrollAnimator.remove(animation));

                return animation;
            };

            app.config.globalProperties.$scrollAnimate = $scrollAnimate;
            app.provide(InjectionKeys.$scrollAnimate, $scrollAnimate);

            $scrollAnimator.initialize();
        }
    };
};
export const useScrollAnimator = (): ScrollAnimate =>
{
    const $scrollAnimate = inject(InjectionKeys.$scrollAnimate);
    if (!$scrollAnimate)
    {
        throw new RuntimeException(
            "`useScrollAnimator` was called with no active instance. " +
            "Did you forget to install `VueScrollAnimator` plugin in your App?"
        );
    }

    return $scrollAnimate;
};
