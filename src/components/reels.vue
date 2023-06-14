<template>
     <div class="third_sect">
          <h1 data-animation="paragraph">Show Us You Love It</h1>
          <div class="third_sect_carousel">
               <div class="third_sect_carousel_wrap" ref="carousel">
                    <div class="arrows">
                         <span @click="move('left')" class="left">
                              <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path
                                        d="M11.6673 2.66602L2.33398 11.9993L11.6673 21.3327M2.33398 11.9993H23.6673"
                                        stroke="grey"
                                        stroke-opacity="0.31"
                                        stroke-width="3.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                   />
                              </svg>
                         </span>
                         <span @click="move('right')" class="right">
                              <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path
                                        d="M14.3327 2.66602L23.666 11.9993L14.3327 21.3327M23.666 11.9993H2.33268"
                                        stroke="black"
                                        stroke-width="3.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                   />
                              </svg>
                         </span>
                    </div>
                    <div class="third_sect_carousel_wrap_item" v-for="tags in croc.tags" :key="tags.id">
                         <div class="img">
                              <img :src="require(`@/assets/r${tags.id}.${tags.format}`)" alt="" />
                         </div>
                         <span class="handle">
                              {{ tags["@"] }}
                         </span>
                         <p data-animation="paragraph">{{ tags.name }} Crocs</p>
                    </div>
               </div>
          </div>
     </div>
</template>

<script lang="ts" setup>
import croc from "@/db/croce.json";
import { onMounted, ref } from "vue";
const carousel = ref<any>(null);

const move = (a: string) => {
     if (a === "right") {
          carousel.value.scrollRight += 3000;
     }
};
</script>

<style lang="scss" scoped>
.third_sect {
     @extend %borderb;
     text-align: center;
     background: white;
     padding: 4rem 0px;
     @include flex_col(7rem);
     @include media("<=phone-tab") {
          gap: 5rem 0px;
     }
     overflow-x: hidden;
     h1 {
          @include media("<=phone-tab") {
               font-size: 4em;
          }
     }
     &_carousel {
          position: relative;
          .arrows {
               position: absolute;
               top: -5rem;
               @include flex(space-between, center);
               gap: 0 2rem;
               right: 4%;
               @include media("<=phone-tab") {
                    display: none;
               }
          }
          &_wrap {
               padding-bottom: 2rem;
               overflow: auto;
               padding-left: 4%;
               @include flex(space-between, center);
               white-space: nowrap;
               scroll-snap-type: x mandatory;
               -webkit-overflow-scrolling: touch;
               gap: 0 3rem;
               @include media("<tablet") {
                    padding-left: 5%;
               }
               &_item {
                    @include flex_col(0.4rem);
                    p {
                         font-size: 1.2em !important;
                         font-family: "Athletic Medium";
                    }
                    .img {
                         width: 100%;
                         img {
                              width: 100%;
                         }
                    }
                    padding: 1rem;
                    box-shadow: 0px 0.3px 4px 0.3px rgba(34, 34, 34, 0.18);
                    flex-shrink: 0;
               }
          }
     }
}
</style>
