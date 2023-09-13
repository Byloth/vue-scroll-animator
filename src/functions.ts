import { inject, onScopeDispose } from "vue";
import type { App, Plugin } from "vue";

import { RuntimeException } from "@byloth/exceptions";

import { InjectionKeys } from "./core";
import type { ScrollAnimate } from "./core";

import ScrollAnimator from "./scroll-animator";
import type Animation from "./models/animation";

import type { ComponentInstance, ScrollAnimatorOptions } from "./types";
import type { AnimationOptions } from "./types/animation";

export const createScrollAnimator = ({ isSSR }: ScrollAnimatorOptions): Plugin =>
{
    return {
        install: (app: App): void =>
        {
            const $scrollAnimator = new ScrollAnimator({ });
            const $scrollAnimate = function(this: ComponentInstance | void, options: AnimationOptions): Animation
            {
                const animation = $scrollAnimator.animate({ target: this?.$el, ...options });

                onScopeDispose(() => $scrollAnimator.remove(animation));

                return animation;
            };

            app.config.globalProperties.$scrollAnimate = $scrollAnimate;
            app.provide(InjectionKeys.$scrollAnimate, $scrollAnimate);

            if (!isSSR)
            {
                $scrollAnimator.initialize();
            }
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
