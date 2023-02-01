import VueScrollAnimator from "./vue-scroll-animator.js";
export default VueScrollAnimator;

import ScrollAnimation from "./scroll-animation.js";
import type { AnimationOptions } from "./scroll-animation.js";
export { ScrollAnimation, AnimationOptions };

export { ClassAnimatorBehavior } from "./animators/index.js";
export { BaseAnimator, ClassAnimator, CssPropertyAnimator } from "./animators/index.js";
export type { BaseAnimatorOptions, ClassAnimatorOptions, CssPropertyAnimatorOptions } from "./animators/index.js";
