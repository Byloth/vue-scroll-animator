import BaseAnimator from "./base-animator.js";
import type { BaseAnimatorOptions } from "./base-animator.js";

import ClassAnimator, { ClassAnimatorBehavior } from "./class-animator.js";
import type { ClassAnimatorOptions } from "./class-animator.js";

import CssPropertyAnimator from "./css-property-animator.js";
import type { CssPropertyAnimatorOptions } from "./css-property-animator.js";

export { ClassAnimatorBehavior };
export { BaseAnimator, ClassAnimator, CssPropertyAnimator };
export { BaseAnimatorOptions, ClassAnimatorOptions, CssPropertyAnimatorOptions };
