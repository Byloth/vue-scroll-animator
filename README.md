# Vue Scroll Animator ↕ #

### A simply but fast & powerful library to animate HTML elements while scrolling pages. ###

---

## Installation ##

```bash
npm install @byloth/vue-scroll-animator --save
```

### Using Vue.js ###

```ts
/* main.ts */

import Vue from "vue";
import VueScrollAnimator from "@byloth/vue-scroll-animator/VueScrollAnimator";

Vue.use(VueScrollAnimator);

// [...]

new Vue({...}).$mount("#app");
```

```ts
/* plugins.d.ts */

import Vue from "vue";
import ScrollAnimation, { AnimationOptions } from "@byloth/vue-scroll-animator/base/ScrollAnimation";

declare module "vue/types/vue"
{
    interface Vue
    {
        $scrollAnimate(options: AnimationOptions): ScrollAnimation;
    }
}
```

## Running ##

### Using Vue.js ###

```ts
/* ExampleVueComponent.ts */

import ScrollAnimation from "@byloth/vue-scroll-animator/base/ScrollAnimation";
import { ClassAnimatorBehavior } from "@byloth/vue-scroll-animator/animators/ClassAnimator";

@Component
export default class ExampleVueComponent extends Vue
{
    protected _animation!: ScrollAnimation;

    // [...]

    public mounted(): void
    {
        this._animation = this.$scrollAnimate({

            startValue: 0,
            endValue: 128,
            classes: [{

                classesName: [ "active" ],
                behavior: ClassAnimatorBehavior.FROM_END
            }],
            cssProperties: [
                {
                    target: this.$refs.title as HTMLElement,
                    name: "font-size",
                    startValue: 34,
                    endValue: 20
                },
                {
                    name: "height",
                    startValue: 168,
                    endValue: 56,
                    maxWidth: 767
                },
                {
                    name: "height",
                    startValue: 192,
                    endValue: 64,
                    minWidth: 768
                }
            ]
        });
    }

    // [...]

    public forceUpdate(): void
    {
        this._animation.update();
    }

    public toggleAnimation(): void
    {
        if (this._animation.isEnabled)
        {
            this._animation.disable();
        }
        else
        {
            this._animation.enable();
        }
    }

    // [...]
}
```
