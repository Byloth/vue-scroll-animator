import type { CoreAnimatorOptions, Style } from "./core";

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
    computeStyle: (value: T) => Style;
}
export interface CustomAnimatorOptions extends CoreAnimatorOptions
{
    update: (ratio: number) => void;
}
