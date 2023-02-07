import type { CoreAnimatorOptions, StyleResult } from "./core.js";

export interface ClassAnimatorOptions extends CoreAnimatorOptions
{
    names: string[];

    threshold?: (ratio: number) => boolean;
}
export interface StyleAnimatorOptions<T = number> extends CoreAnimatorOptions
{
    startValue?: number;
    endValue?: number;

    computeValue?: (ratio: number) => T;
    computeStyle: (value: T) => StyleResult;
}
export interface CustomAnimatorOptions extends CoreAnimatorOptions
{
    update: (ratio: number) => void;
}
