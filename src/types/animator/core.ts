export interface CoreAnimatorOptions
{
    target?: HTMLElement;

    mediaQuery?: string;
}

type PropertiesToOmit = number |
    "length" |
    "parentRule" |
    "getPropertyPriority" |
    "getPropertyValue" |
    "item" |
    "removeProperty" |
    "setProperty";

type StyleDefinition = Omit<CSSStyleDeclaration, PropertiesToOmit>;

export type StyleProperties = keyof StyleDefinition;
export type StyleResult = { [P in StyleProperties]?: string };
