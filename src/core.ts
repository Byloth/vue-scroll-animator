import type { InjectionKey } from "vue";

import type Animation from "./models/animation.js";
import type { AnimationOptions } from "./types/animation/index.js";

export type ScrollAnimate = (options: AnimationOptions) => Animation;

export const InjectionKeys = {
    $scrollAnimate: Symbol("[vue-scroll-animator]: scroll-animate") as InjectionKey<ScrollAnimate>
};
