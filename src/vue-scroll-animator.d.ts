//
// Based on: https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
//

import Vue from "vue";

import ScrollAnimation from "./scroll-animation";

declare module "vue/types/vue"
{
    interface Vue
    {
        _scrollAnimations: ScrollAnimation[];
    }
    interface VueConstructor
    {
        _scrollAnimations: ScrollAnimation[];
    }
}

