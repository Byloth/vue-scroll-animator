import { ValueException } from "@byloth/exceptions";

import type { ClassAnimatorOptions } from "../../types/animator/index.js";

import Animator from "./core.js";
import { AnimatorThreshold } from "./utils.js";

export default class ClassAnimator extends Animator
{
    public static get DEFAULT_OPTIONS()
    {
        return {
            names: [],

            threshold: AnimatorThreshold.FromStart
        };
    }

    protected _lastIsActive?: boolean;
    protected _names: string[];

    protected _threshold: (ratio: number) => boolean;

    public constructor(options: ClassAnimatorOptions)
    {
        const _options = { ...ClassAnimator.DEFAULT_OPTIONS, ...options };
        super(_options);

        this._names = _options.names;
        if (!this._names.length)
        {
            throw new ValueException(
                "At least one property between 'classes', 'styles'" +
                " or 'customs' needs to be correctly valorized."
            );
        }

        this._threshold = _options.threshold;
    }

    public update(ratio: number): void
    {
        const isActive = this._threshold(ratio);
        if (isActive !== this._lastIsActive)
        {
            if (isActive === true)
            {
                this._target.classList.add(...this._names);
            }
            else
            {
                this._target.classList.remove(...this._names);
            }

            this._lastIsActive = isActive;
        }
    }
}
