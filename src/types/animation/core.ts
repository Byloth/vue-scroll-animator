import type { UpdatableCoreOptions } from "../core";
import type { Orientation } from "..";
import type { ClassAnimatorOptions, CustomAnimatorOptions, StyleAnimatorOptions } from "../animator";

interface PartialAnimation extends UpdatableCoreOptions
{
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
