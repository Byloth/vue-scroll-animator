import type { UpdatableCoreOptions } from "../core";

export interface CoreAnimatorOptions extends UpdatableCoreOptions
{
    target: HTMLElement;
}

type StringKeys<T> = { [K in keyof T]: T[K] extends string ? K : never; }[keyof T];
type OnlyStrings<T> = Omit<Pick<T, StringKeys<T>>, number>;

type StyleDefinition = OnlyStrings<CSSStyleDeclaration>;
export type StyleProperty = keyof StyleDefinition;
export type Style = Partial<StyleDefinition>;
