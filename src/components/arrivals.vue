<template>
     <section class="arrivals">
          <div class="arrivals_wrap contain_wrap">
               <div class="arrivals_wrap_filters">
                    <div class="arrivals_wrap_filters_item">New arrival</div>
                    <div class="arrivals_wrap_filters_item">Best Sellers</div>
                    <div class="arrivals_wrap_filters_item">Exclusive</div>
                    <div class="arrivals_wrap_filters_item">Men</div>
                    <div class="arrivals_wrap_filters_item">Women</div>
                    <div class="arrivals_wrap_filters_item">Kids</div>
                    <div class="arrivals_wrap_filters_item">Top</div>
               </div>
               <div class="arrivals_wrap_croce">
                    <div v-for="crocs in croc.crocs" :key="crocs.id" class="arrivals_wrap_croce_item">
                         <div class="img">
                              <svg viewBox="0 0 253 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path
                                        d="M120.447 4.53197C123.254 0.465966 129.262 0.465961 132.07 4.53196L152.72 34.44C154.932 37.6434 159.014 38.9698 162.687 37.6783L196.973 25.6203C201.634 23.9811 206.495 27.5124 206.376 32.4521L205.503 68.7863C205.41 72.678 207.933 76.1506 211.663 77.2643L246.489 87.6622C251.223 89.0757 253.08 94.7896 250.08 98.7161L228.017 127.598C225.654 130.692 225.654 134.984 228.017 138.077L250.08 166.96C253.08 170.886 251.223 176.6 246.489 178.013L211.663 188.411C207.933 189.525 205.41 192.998 205.503 196.889L206.376 233.224C206.495 238.163 201.634 241.695 196.973 240.055L162.687 227.997C159.014 226.706 154.932 228.032 152.72 231.236L132.07 261.144C129.262 265.21 123.254 265.21 120.447 261.144L99.7962 231.236C97.5844 228.032 93.502 226.706 89.8297 227.997L55.5435 240.055C50.8823 241.695 46.0218 238.163 46.1404 233.224L47.0132 196.889C47.1067 192.998 44.5837 189.525 40.8536 188.411L6.02795 178.013C1.2934 176.6 -0.563144 170.886 2.4363 166.96L24.4992 138.077C26.8622 134.984 26.8622 130.692 24.4992 127.598L2.43631 98.7161C-0.563142 94.7896 1.29339 89.0757 6.02794 87.6622L40.8536 77.2643C44.5837 76.1506 47.1067 72.678 47.0132 68.7863L46.1404 32.4521C46.0218 27.5124 50.8823 23.9811 55.5435 25.6203L89.8297 37.6783C93.502 38.9698 97.5844 37.6434 99.7962 34.44L120.447 4.53197Z"
                                        :fill="crocs.color"
                                        stroke="black"
                                        stroke-width="1.56936"
                                   />
                              </svg>
                              <img
                                   @click="rubberBand"
                                   class="croc_shuu animate__animated animate__repeat-1"
                                   :src="require(`@/assets/croc${crocs.id}.svg`)"
                                   alt=""
                              />
                         </div>
                         <p data-animation="header">{{ crocs.name }}</p>
                         <p class="_price" data-animation="header">${{ crocs.price }}</p>
                    </div>
               </div>
               <div class="btn">
                    <button>&nbsp;See All&nbsp;</button>
               </div>
          </div>
     </section>
</template>

<script setup lang="ts">
import { IO } from "@/animations/observe";
import croc from "@/db/croce.json";
import { onMounted } from "@vue/runtime-core";

const rubberBand = (e: { target: any }) => {
     e.target.classList.toggle("animate__rubberBand");
};

onMounted(() => {
     const elem = document.querySelector(".arrivals")!;
     const observer = new window.IntersectionObserver(
          (entries) => {
               entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                         entry.target.querySelectorAll(".croc_shuu").forEach((item, i) => {
                              setTimeout(() => {
                                   item.classList.toggle("animate__rubberBand");
                              }, i * 150);
                         });
                    }
               });
          },
          { threshold: 0.5, rootMargin: "-30px" }
     );
     observer.observe(elem);
});
</script>

<style lang="scss" scoped>
.arrivals {
     padding: 4rem 0px;
     overflow-x: hidden;
     border-top: 2px solid black;
     background: white;
     @extend %borderb;
     &_wrap {
          @include flex_col(4.5rem 0);
          text-align: center;
          &_filters {
               @extend %flex_r;
               gap: 0 1.3rem;
               overflow: visible;
               -webkit-overflow-scrolling: touch;
               @include media("<=phone-tab") {
                    gap: 0 0.7rem;
               }
               &_item {
                    font-size: 1.9rem;
                    border-radius: 20rem;
                    padding: 0.5rem 1.2rem;
                    font-family: "Athletic";
                    white-space: nowrap;
                    border: 0.2rem solid black;
                    @include media("<=phone-tab") {
                         font-size: 1.1em;
                         padding: 0.3rem 0.8rem;
                    }
                    &:nth-child(1) {
                         background: black;
                         color: white;
                    }
               }
          }
          &_croce {
               @include flex(space-around, center);
               @include media("<=tablet") {
                    display: grid;
                    gap: 4rem 1rem;
                    grid-template-columns: repeat(2, auto);
               }
               &_item {
                    @include flex_col(1.2rem 0);
                    @include media("<=phone-tab") {
                         gap: 0.8rem 0px;
                    }
                    .img {
                         position: relative;
                         svg {
                              width: 16rem;
                              @include media("<=phone-tab") {
                                   width: 11rem;
                              }
                              &:nth-child(odd) {
                                   animation: rotate 7s linear infinite normal forwards;
                              }
                         }
                         .croc_shuu {
                              position: absolute;
                              left: 20%;
                              width: 11rem;
                              top: 26%;
                              @include media("<=phone-tab") {
                                   width: 7rem;
                              }
                         }
                    }
                    p {
                         font-size: 2em;
                         font-family: "Athletic";
                         @include media("<=phone-tab") {
                              font-size: 1.2em;
                         }
                    }
                    ._price {
                         color: #0f0e10a8;
                    }
               }
          }
          .btn {
               @include btn(black, rgb(255, 255, 255)) {
                    background: black;
               }
          }
     }
}
@keyframes rotate {
     0% {
          transform: 0;
     }
     100% {
          transform: rotateZ(360deg);
     }
}
</style>
