import type { Orientation } from "../index.js";
import type { ClassAnimatorOptions, CustomAnimatorOptions, StyleAnimatorOptions } from "../animator/index.js";

interface PartialAnimation
{
    target?: HTMLElement;

    orientation?: Orientation;
}

interface ClassesAnimatorProperty
{
    classes: ClassAnimatorOptions[];
    styles?: StyleAnimatorOptions[];

    customs?: CustomAnimatorOptions[];
}
interface StylesAnimatorProperty
{
    classes?: ClassAnimatorOptions[];
    styles: StyleAnimatorOptions[];

    customs?: CustomAnimatorOptions[];
}
interface CustomsAnimatorProperty
{
    classes?: ClassAnimatorOptions[];
    styles?: StyleAnimatorOptions[];

    customs: CustomAnimatorOptions[];
}

type AnimatorProperties = ClassesAnimatorProperty | StylesAnimatorProperty | CustomsAnimatorProperty;

export type CoreAnimation = PartialAnimation & AnimatorProperties;
