import BaseAnimator from "./base-animator.js";
import type { BaseAnimatorOptions } from "./base-animator.js";

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

export interface ClassAnimatorOptions extends BaseAnimatorOptions
{
    classesName: string[];
    behavior?: ClassAnimatorBehavior;
}

export default class ClassAnimator extends BaseAnimator
{
    public static DEFAULT_OPTIONS = { behavior: ClassAnimatorBehavior.FROM_START };

    protected _lastIsActive?: boolean;
    protected _classesName: string[];

    protected _isActive: (ratioValue: number) => boolean;

    public constructor(options: ClassAnimatorOptions)
    {
        options = { ...ClassAnimator.DEFAULT_OPTIONS, ...options };

        super(options);

        this._classesName = options.classesName;

        if (options.behavior === ClassAnimatorBehavior.FROM_START)
        {
            this._isActive = (ratioValue: number) => (ratioValue > 0);
        }
        else if (options.behavior === ClassAnimatorBehavior.UNTIL_START)
        {
            this._isActive = (ratioValue: number) => (ratioValue <= 0);
        }
        else if (options.behavior === ClassAnimatorBehavior.BETWEEN_START_END)
        {
            this._isActive = (ratioValue: number) => ((ratioValue > 0) && (ratioValue < 1));
        }
        else if (options.behavior === ClassAnimatorBehavior.EXCEPT_START_END)
        {
            this._isActive = (ratioValue: number) => ((ratioValue <= 0) && (ratioValue >= 1));
        }
        else if (options.behavior === ClassAnimatorBehavior.FROM_END)
        {
            this._isActive = (ratioValue: number) => (ratioValue >= 1);
        }
        else if (options.behavior === ClassAnimatorBehavior.UNTIL_END)
        {
            this._isActive = (ratioValue: number) => (ratioValue < 1);
        }
        else
        {
            throw new Error(`Invalid value "${options.behavior}" for 'behavior' option.`);
        }
    }

    protected _update(ratioValue: number): void
    {
        const isActive = this._isActive(ratioValue);

        if (isActive !== this._lastIsActive)
        {
            if (isActive === true)
            {
                this.addClasses();
            }
            else
            {
                this.removeClasses();
            }

            this._lastIsActive = isActive;
        }
    }

    public addClasses(): void
    {
        for (const className of this._classesName)
        {
            this._target.classList.add(className);
        }
    }
    public removeClasses(): void
    {
        for (const className of this._classesName)
        {
            this._target.classList.remove(className);
        }
    }
}
