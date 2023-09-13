import Animation from "./models/animation";
import ScrollAnimator from "./scroll-animator";

export { createScrollAnimator, useScrollAnimator } from "./functions";

export { AnimatorThreshold, StyleComposer } from "./models/animator/utils";
export { ClassAnimator, StyleAnimator, CustomAnimator } from "./models/animator";

export type { ScrollAnimatorOptions } from "./types";
export type { Style, StyleProperty } from "./types/animator/core";
export type { ClassAnimatorOptions, StyleAnimatorOptions, CustomAnimatorOptions } from "./types/animator";
export type { AnimationOptions, RatioAnimation, EndlessAnimation, CustomAnimation } from "./types/animation";

export default ScrollAnimator;

export { Animation };

import type { ScrollAnimate } from "./core";

declare module "vue"
{
    interface ComponentCustomProperties
    {
        $scrollAnimate: ScrollAnimate;
    }
}
