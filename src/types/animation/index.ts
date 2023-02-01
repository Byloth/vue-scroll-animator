import type { CoreAnimation } from "./core.js";

export type RatioAnimation = CoreAnimation &
{
    startValue: number;
    endValue: number;

    boundary?: undefined;
    speed?: undefined;

    easing?: (ratio: number) => number;
    computeRatio?: undefined;
};
export type EndlessAnimation = CoreAnimation &
{
    startValue?: number;
    endValue?: undefined;

    boundary?: number;
    speed?: number;

    easing?: undefined;
    computeRatio?: undefined;
};
export type CustomAnimation = CoreAnimation &
{
    startValue?: undefined;
    endValue?: undefined;

    boundary?: undefined;
    speed?: undefined;

    easing?: undefined;
    computeRatio: (scrollValue: number) => number;
};

export type AnimationOptions = RatioAnimation | EndlessAnimation | CustomAnimation;
