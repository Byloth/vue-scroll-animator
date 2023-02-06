import type { CustomAnimatorOptions } from "../../types/animator/index.js";

import Animator from "./core.js";

export default class CustomAnimator extends Animator
{
    public readonly update: (ratio: number) => void;

    public constructor(options: CustomAnimatorOptions)
    {
        const _options = { ...options };
        super(_options);

        this.update = _options.update;
    }
}
