import type { StyleProperty } from "../../types/animator/core.js";

export class AnimatorThreshold
{
    public static get FromStart()
    {
        return (ratio: number) => (ratio > 0);
    }
    public static get UntilStart()
    {
        return (ratio: number) => (ratio <= 0);
    }
    public static get BetweenStartEnd()
    {
        return (ratio: number) => ((ratio > 0) && (ratio < 1));
    }
    public static get ExceptStartEnd()
    {
        return (ratio: number) => ((ratio <= 0) && (ratio >= 1));
    }
    public static get FromEnd()
    {
        return (ratio: number) => (ratio >= 1);
    }
    public static get UntilEnd()
    {
        return (ratio: number) => (ratio < 1);
    }
}

export class StyleComposer
{
    public static Numeric(property: StyleProperty, unit = "")
    {
        return (value: number) => ({ property: `${value}${unit}` });
    }
}
