import type { ComponentPublicInstance } from "vue";

export type ComponentInstance = ComponentPublicInstance | undefined;
export type Orientation = "horizontal" | "vertical";

export interface ScrollAnimatorOptions
{
    isSSR?: boolean;
}
