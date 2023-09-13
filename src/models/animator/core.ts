import type { CoreAnimatorOptions } from "@src/types/animator/core";

import UpdatableCore from "../core";

export default abstract class Animator extends UpdatableCore
{
    public abstract update(ratio: number): void;
}
