//
// Based on: https://github.com/janpaepke/ScrollMagic
//

import _Vue, { PluginObject } from "vue";

import ScrollAnimation, { AnimationOptions } from "./animations";

class VueScrollAnimator implements PluginObject<unknown>
{
    protected _isUpdating: boolean;
    protected _requestId?: number;

    protected _animations: ScrollAnimation[];

    public constructor()
    {
        this._isUpdating = false;
        this._animations = [];
    }

    protected _requestCallback = (timestamp: number): void =>
    {
        if (this._isUpdating === true)
        {
            for (const animation of this._animations.filter((a: ScrollAnimation) => a.isEnabled))
            {
                animation.update();
            }

            this._isUpdating = false;
        }
    };

    protected _eventListener = (evt: Event): void =>
    {
        if (this._isUpdating === false)
        {
            this._isUpdating = true;
            this._requestId = window.requestAnimationFrame(this._requestCallback);
        }
    };

    public animate(options: AnimationOptions): ScrollAnimation
    {
        if (options.target === undefined)
        {
            throw new Error("'target' option must be correctly valorized.");
        }

        const animation = new ScrollAnimation(options);
        this._animations.push(animation);

        return animation;
    }
    public deanimate(animation: ScrollAnimation): void
    {
        this._animations = this._animations.filter((item) => item !== animation);

        animation.disable();
    }

    public install(Vue: typeof _Vue, configuration?: unknown): void
    {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;

        this.init();

        Vue.prototype.$scrollAnimate = function(options: AnimationOptions): ScrollAnimation
        {
            // eslint-disable-next-line no-console
            console.warn('"$scrollAnimate" method has been deprecated.' +
                         ' Please, update your code using "$initScrollAnimation"');

            return self.animate.call(self, { target: this.$el, ...options });
        };

        Vue.prototype.$initScrollAnimation = function(options: AnimationOptions): ScrollAnimation
        {
            return self.animate.call(self, { target: this.$el, ...options });
        };

        Vue.prototype.$destroyScrollAnimation = function(animation: ScrollAnimation): void
        {
            self.deanimate.call(self, animation);
        };
    }

    public init(): void
    {
        window.addEventListener("resize", this._eventListener, { capture: true, passive: true });
        window.addEventListener("scroll", this._eventListener, { capture: true, passive: true });
    }
    public destroy(): void
    {
        window.removeEventListener("resize", this._eventListener);
        window.removeEventListener("scroll", this._eventListener);

        if (this._requestId !== undefined)
        {
            window.cancelAnimationFrame(this._requestId);

            this._requestId = undefined;
        }
    }
}

export default new VueScrollAnimator();

export { VueScrollAnimator };
