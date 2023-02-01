import type { InjectionKey } from "vue";

import type { ScrollAnimate } from "./models/scroll-animation.js";

export const InjectionKeys = {
    $scrollAnimate: Symbol("[vue-scroll-animator]: scroll-animate") as InjectionKey<ScrollAnimate>
};
