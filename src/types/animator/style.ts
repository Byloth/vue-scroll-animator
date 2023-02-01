import type { AnimatorOptions } from "./core.js";

export interface StyleAnimatorOptions extends AnimatorOptions
{
    name: string;
    unit?: string;

    startValue: number;
    endValue?: number;

    // TODO: Definire quali e gestire anche queste proprietà.
    //
    // direction?: string; -> normal / inverse
    // speed?: number; -> 1x / 2x / 0.5x / ...
    // timing?: string; -> linear / ease / cubic

    computeValue?: (ratioValue: number) => number;
}
