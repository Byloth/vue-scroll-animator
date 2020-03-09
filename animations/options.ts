import { ClassAnimatorOptions } from "../animators/classes";
import { CssPropertyAnimatorOptions } from "../animators/cssProperties";

export default interface AnimationOptions
{
    target?: HTMLElement;

    startingValue: number;
    maxDifference?: number;
    endingValue?: number;
    // direction?: string; -> vertical / horizontal

    classes?: ClassAnimatorOptions[];
    cssProperties?: CssPropertyAnimatorOptions[];

    computeRatio?: (scrollValue: number) => number;
}
