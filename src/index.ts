import Animation from "./models/animation.js";
import ScrollAnimator from "./scroll-animator.js";

export { createScrollAnimator, useScrollAnimator } from "./functions.js";

export { AnimatorThreshold, StyleComposer } from "./models/animator/utils.js";
export { ClassAnimator, StyleAnimator, CustomAnimator } from "./models/animator/index.js";

export type { ScrollAnimatorOptions } from "./types/index.js";
export type { Style, StyleProperty } from "./types/animator/core.js";
export type { ClassAnimatorOptions, StyleAnimatorOptions, CustomAnimatorOptions } from "./types/animator/index.js";
export type { AnimationOptions, RatioAnimation, EndlessAnimation, CustomAnimation } from "./types/animation/index.js";

export default ScrollAnimator;

export { Animation };

import type { ScrollAnimate } from "./core.js";

declare module "vue"
{
    interface ComponentCustomProperties
    {
        $scrollAnimate: ScrollAnimate;
    }
}
