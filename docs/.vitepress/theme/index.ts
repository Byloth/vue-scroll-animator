import type { EnhanceAppContext, Theme } from "vitepress";

import DefaultTheme from "vitepress/theme";
import { createScrollAnimator } from "@src/functions.js";

const VueScrollAnimatorTheme: Theme = {
    ...DefaultTheme,

    enhanceApp: (ctx: EnhanceAppContext): void =>
    {
        const scrollAnimator = createScrollAnimator({ isSSR: import.meta.env.SSR });

        ctx.app.use(scrollAnimator);
    }
};

export default VueScrollAnimatorTheme;
