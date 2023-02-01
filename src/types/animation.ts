import type { ClassAnimatorOptions, StyleAnimatorOptions } from "./animator/index.js";

export interface AnimationOptions
{
    target?: HTMLElement;

    startValue: number;
    endValue?: number;
    maxDifference?: number;
    orientation?: "horizontal" | "vertical";

    classes?: ClassAnimatorOptions[];
    styles?: StyleAnimatorOptions[];

    computeRatio?: (scrollValue: number) => number;
}
