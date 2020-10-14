import { BaseAnimatorOptions } from "@/animators";

export default interface CssPropertyAnimatorOptions extends BaseAnimatorOptions
{
    name: string;
    unit?: string;

    startValue: number;
    endValue?: number;

    // direction?: string; -> normal / inverse
    // speed?: number; -> 1x / 2x / 0.5x / ...
    // timing?: string; -> linear / ease / cubic

    computeValue?: (ratioValue: number) => number;
}
