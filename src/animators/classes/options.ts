import { BaseAnimatorOptions } from "@/animators";

enum ClassAnimatorBehavior
{
    FROM_START = 0,
    UNTIL_START = 1,
    BETWEEN_START_END = 2,
    EXCEPT_START_END = 3,
    FROM_END = 4,
    UNTIL_END = 5
}

export default interface ClassAnimatorOptions extends BaseAnimatorOptions
{
    classesName: string[];
    behavior?: ClassAnimatorBehavior;
}

export { ClassAnimatorBehavior };
