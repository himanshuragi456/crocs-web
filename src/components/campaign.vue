<template>
     <div class="marquee">
          <div @mouseover="$store.dispatch('pauseMarquee')" @mouseleave="$store.dispatch('playMarquee')" class="span_slider">
               <h1 class="span_slider_wrap">
                    <div class="_p span_slider_wrap_txt">Where Imagination runs wild &nbsp;</div>
                    <div class="_g span_slider_wrap_txt">Where Imagination runs wild &nbsp;</div>
               </h1>
               <h1 class="span_slider_wrap">
                    <div class="_p span_slider_wrap_txt">Where Imagination runs wild &nbsp;</div>
                    <div class="_g span_slider_wrap_txt">Where Imagination runs wild &nbsp;</div>
               </h1>
          </div>
     </div>
     <section class="campaign">
          <div class="cmp">
               <div class="sect_1">
                    <h1 data-animation="paragraph">Create Your Unique Style</h1>
                    <p data-animation="paragraph">
                         We are creating a new campaign (Project Style Your Uniqueness) to enable our customers choose what look, style
                         or theme their crocs will look like.
                    </p>
                    <div class="btn">
                         <button>Style Crocs</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <canvas data-animation="matter-drop"></canvas>
               </div>
          </div>
     </section>
</template>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { fallSync } from "../animations/matter/fall";
const m = [
     "https://res.cloudinary.com/dszdgdeoh/image/upload/v1664456175/heart_faluri.svg",
     "https://res.cloudinary.com/dszdgdeoh/image/upload/v1664456088/svg4_fygbt8.svg",
     "https://res.cloudinary.com/dszdgdeoh/image/upload/v1664456083/svg1_giz97q.svg",
     "https://res.cloudinary.com/dszdgdeoh/image/upload/v1664456083/Paint_kirpol.svg",
     "https://res.cloudinary.com/dszdgdeoh/image/upload/v1664456083/svg5_oltkfa.svg",
     "https://res.cloudinary.com/dszdgdeoh/image/upload/v1664456083/svg2_ksaich.svg",
     "https://res.cloudinary.com/dszdgdeoh/image/upload/v1664456083/svg3_x2dtzt.svg",
];
onMounted(() => {
     const elem = document.querySelector<HTMLElement>(".campaign")!;
     fallSync(elem, m);
});
</script>

<style lang="scss" scoped>
.campaign {
     @include flex(space-between, center);
     @include media("<=tablet") {
          @include flex_col(0rem);
     }
     @include split($pale-orange, $milk);
}
.cmp {
     &:nth-child(1) {
          .sect_1 {
               p {
                    width: 100%;
               }
               .btn {
                    @include btn(black, black);
               }
          }
     }
     &:nth-child(2) {
          background: $pale-orange;
          .sect_2 {
               canvas {
                    height: 47rem;
                    width: 100%;
                    @include media("<=phone-tab") {
                         height: 35rem;
                    }
               }
          }
     }
}
.marquee {
     background: $black-bg;
     padding: 2rem 1rem;
     overflow: hidden;
     @include media("<=phone-tab") {
          padding: 1rem 1rem;
     }
     .span_slider {
          @include flex(space-between, center);
          flex-wrap: nowrap;
          overflow: visible;
          h1 {
               font-weight: 500;
          }
          &_wrap {
               @include flex(center, center);
               flex-wrap: nowrap;
               animation: marquee 20s linear 0s infinite normal forwards;
               gap: 0 1rem;
               overflow: visible;
               flex-shrink: 0;
               &_txt {
                    @include flex(space-between, center);
               }
          }
          ._p {
               color: $pale-orange;
               &:hover {
                    color: white;
                    -webkit-text-stroke: 1px cyan;
                    cursor: url("../assets/cyan_cursor.svg"), auto;
               }
          }
          ._g {
               color: $croc-green;
               &:hover {
                    color: white;
                    -webkit-text-stroke: 1px pink;
                    cursor: url("../assets/pink_cursor.svg"), auto;
               }
          }
     }
}
</style>
