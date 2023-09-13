import type { InjectionKey } from "vue";

import type Animation from "./models/animation";
import type { AnimationOptions } from "./types/animation";

export type ScrollAnimate = (options: AnimationOptions) => Animation;

export const InjectionKeys = {
    $scrollAnimate: Symbol("[vue-scroll-animator]: scroll-animate") as InjectionKey<ScrollAnimate>
};
