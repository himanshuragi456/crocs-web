<template>
     <section class="collab">
          <div class="collab_wrap">
               <div class="collab_wrap_txt contain_wrap">
                    <h1 data-animation="paragraph">Crocs SuperStar Collab</h1>
                    <p data-animation="paragraph">
                         We make the most confortable shoes in the world, and by partnering with some of your favourite celebrities, We
                         bring thier designs and style to you in incredable confort.
                    </p>
               </div>
               <div class="collab_wrap_slider">
                    <div class="collab_wrap_slider_star">
                         <div class="img">
                              <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663677823/Star17_mmmjc5.svg" alt="" />
                         </div>
                    </div>
                    <div class="collab_wrap_slider_star">
                         <div class="img">
                              <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663677822/Star13_lodkbu.svg" alt="" />
                         </div>
                    </div>
                    <div class="collab_wrap_slider_star">
                         <div class="img">
                              <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663677822/Star16_rwo3e5.svg" alt="" />
                         </div>
                    </div>
                    <div class="collab_wrap_slider_star">
                         <div class="img">
                              <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663677822/Star18_f3cvp6.svg" alt="" />
                         </div>
                    </div>
               </div>
          </div>
     </section>
</template>

<script lang="ts" setup>
import croc from "@/db/croce.json";
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
     const elem = document.querySelector(".collab_wrap_slider_star:last-child")!;
     const elements = document.querySelectorAll(".collab_wrap_slider_star");

     const lastobserver = new window.IntersectionObserver((entries) => {
          const lastcard = entries[0];
          if (!lastcard.isIntersecting) {
               return;
          }
          if (lastcard.isIntersecting) {
               loadnewcard();
               lastobserver.unobserve(lastcard.target);
               lastobserver.observe(elem);
               elements[0].remove();
          }
     });
     3;
     lastobserver.observe(elem);

     const cardContainer = document.querySelector(".collab_wrap_slider");
     const loadnewcard = () => {
          for (let i = 0; i < croc.collab.length; i++) {
               const card = document.createElement("div");
               card.innerHTML = `<div class="img">
               <img src="${croc.collab[i].img}" alt>
          </div>`;
               card.classList.add("collab_wrap_slider_star");
               cardContainer?.append(card);
          }
     };
});
</script>

<style lang="scss" scoped>
.collab {
     padding: 5rem 0px;
     background: #12203b;
     &_wrap {
          @include flex_col(6rem);
          @include media("<=tablet") {
               @include flex_col(4rem);
          }
          &_txt {
               text-align: center;
               color: #ffa9aa;
               @include flex_col(2.6rem);
               p {
                    width: 80%;
                    margin: 0 auto;
                    @include media("<=tablet") {
                         width: 100%;
                    }
               }
          }
          &_slider {
               display: flex;
               padding-left: 5%;
               gap: 0 3.5rem;
               white-space: nowrap;
               cursor: grab;
               overflow-x: auto;
               scroll-snap-type: x mandatory;
               -webkit-overflow-scrolling: touch;
               @include media("<=tablet") {
                    gap: 0 2.5rem;
               }
               &_star {
                    flex-shrink: 0;
                    .img {
                         width: 100%;
                         img {
                              width: 100%;
                         }
                    }
               }
          }
     }
}
</style>
