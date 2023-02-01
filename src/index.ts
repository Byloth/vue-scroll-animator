import ScrollAnimator from "./scroll-animator.js";
export default ScrollAnimator;

import Animation from "./models/animation.js";
import type { AnimationOptions } from "./types/animation.js";
export { Animation, AnimationOptions };

export { Animator, ClassAnimator, StyleAnimator } from "./models/animator/index.js";
export { ClassAnimatorBehavior } from "./types/animator/class.js";
export type { AnimatorOptions, ClassAnimatorOptions, StyleAnimatorOptions } from "./types/animator/index.js";
