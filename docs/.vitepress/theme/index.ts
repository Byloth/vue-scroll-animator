import type { Theme } from "vitepress";

import DefaultTheme from "vitepress/theme";
import { createScrollAnimator } from "@src/functions";

const VueScrollAnimatorTheme: Theme = {
    ...DefaultTheme,

    enhanceApp: ({ app, router, siteData }): void =>
    {
        const scrollAnimator = createScrollAnimator({ isSSR: import.meta.env.SSR });

        app.use(scrollAnimator);
    }
};

export default VueScrollAnimatorTheme;
