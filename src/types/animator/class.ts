import type { AnimatorOptions } from "./core.js";

export enum ClassAnimatorBehavior
{
    /* eslint-disable no-unused-vars */

    FROM_START = 0,
    UNTIL_START = 1,
    BETWEEN_START_END = 2,
    EXCEPT_START_END = 3,
    FROM_END = 4,
    UNTIL_END = 5
}

export interface ClassAnimatorOptions extends AnimatorOptions
{
    classesName: string[];
    behavior?: ClassAnimatorBehavior;
}
