import { createStore, useStore as baseUseStore, Store } from "vuex";
import { InjectionKey } from "vue";

export interface State {
     count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
     state: {},
     mutations: {},
     actions: {
          pauseMarquee(commit) {
               document.querySelectorAll<HTMLElement>("h1.span_slider_wrap").forEach((item) => {
                    item.style.animationPlayState = "paused";
               });
          },
          playMarquee(commit) {
               document.querySelectorAll<HTMLElement>("h1.span_slider_wrap").forEach((item) => {
                    item.style.animationPlayState = "running";
               });
          },
     },
     modules: {},
});

export function useStore() {
     return baseUseStore(key);
}
