<template>
     <section class="salehe">
          <div class="cmp">
               <div class="sect_1">
                    <h1 data-animation="paragraph">Salehe Bembury Crocs</h1>
                    <p data-animation="paragraph">Jump into the artistic world of Salehe where he brings his unique designs to crocs.</p>
                    <div class="btn">
                         <button>Shop Crocs</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <div class="img">
                         <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663678761/salehe_xintyl.svg" alt="" />
                    </div>
                    <canvas data-animation="matter-drop"></canvas>
               </div>
          </div>
     </section>
     <section class="saweetie">
          <div class="cmp">
               <div class="sect_1">
                    <h1 data-animation="header">Saweetie Sweet Crocs</h1>
                    <p data-animation="paragraph">
                         Make hearts melt but keep your Jibbitz looking cold with an icy drip that only Saweetie can provide. Our all-new
                         Saweetie X Crocs Jibbitz charms are ready to be paired with the irresistible Classic Clogs
                    </p>
                    <div class="btn">
                         <button>Shop Crocs</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <div class="img">
                         <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663678693/saweetie_njlvjc.svg" alt="" />
                    </div>
                    <canvas data-animation="matter-drop"></canvas>
               </div>
          </div>
     </section>
     <section class="sza">
          <div class="cmp">
               <div class="sect_1">
                    <h1 data-animation="header">Sza Unique Crocs</h1>
                    <p data-animation="paragraph">
                         The SZA X Crocs Classic Clog puts her personality up top, with colorful Jibbitz charms that showcase the world of
                         SZA, totems that keep her grounded, calm, and collective.
                    </p>
                    <div class="btn">
                         <button>Shop Crocs</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <div class="img">
                         <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663678703/sza_xvpjn1.svg" alt="" />
                    </div>
                    <canvas data-animation="matter-drop"></canvas>
               </div>
          </div>
     </section>
</template>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { fallSync } from "../animations/matter/fall";

onMounted(() => {
     const sza = document.querySelector<HTMLElement>(".sza")!;
     const salehe = document.querySelector<HTMLElement>(".salehe")!;
     const saweetie = document.querySelector<HTMLElement>(".saweetie")!;
     fallSync(sza, [
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472946/Group_625_drpg4v.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667478770/A_mjc0j9.png",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472946/Group_626_cu3czr.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667478770/A_mjc0j9.png",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472946/Group_627_it0okr.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667478770/A_mjc0j9.png",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1665585719/flower_vpuwfr.svg",
     ]);

     fallSync(saweetie, [
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667315245/Stickers_V1_upkcvo.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472718/Group_620_pwc2eo.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472718/Group_621_k6xcm7.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472718/Group_622_v0uhov.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472718/Group_623_dp7sg8.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472718/Group_624_swqngl.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667315239/image_40_ajgryd.svg",
     ]);

     fallSync(salehe, [
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667316205/Frame_zilwad.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472311/S_xpx4fk.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472350/A_w7j5bo.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472336/L_cbn2zd.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472327/E_yarwx6.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472336/H_cg0hjs.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667472327/E__ttmqob.svg",
     ]);
});
</script>

<style lang="scss" scoped>
.sect_2 {
     position: relative;
     canvas {
          position: absolute;
          background: transparent;
          height: 47rem;
          width: 100%;
          @include media("<=phone-tab") {
               height: 35rem;
          }
     }
}
.salehe {
     @include split($purple, $lavender);
     @extend %borderb;
     .sect_1 {
          color: white;
          @include flex_col(2.6rem);
          h1 {
               @include media("<=phone-tab") {
                    font-size: 3.9em;
               }
          }
          @extend %cmptext;
          .btn {
               @include btn(white, white);
          }
     }
     .sect_2 {
          .img {
               width: 20rem;
               img {
                    width: 100%;
               }
               @include media("<=phone-tab") {
                    width: 18rem;
               }
          }
     }
}
.saweetie {
     @include split($pink, $lightpink);
     @extend %borderb;
     flex-direction: row-reverse;
     .cmp {
          &:nth-child(2) {
               border-right: 1px solid black;
          }
          &:nth-child(1) {
               border-left: 1px solid black;
          }
     }
     .sect_1 {
          @include flex_col(2.6rem);
          @extend %cmptext;
          color: $darke;
          .btn {
               @include btn($darke, $darke);
          }
     }
     .sect_2 {
          .img {
               width: 23rem;
               img {
                    width: 100%;
               }
               @include media("<=phone-tab") {
                    width: 18rem;
               }
          }
     }
}
.sza {
     @include split($sza, $pale-green);
     @extend %borderb;
     .sect_1 {
          @include flex_col(2.6rem);
          color: $szagrey;
          .btn {
               @include btn($szagrey, $szagrey);
          }
     }
     .sect_2 {
          .img {
               width: 27rem;
               img {
                    width: 100%;
               }
               @include media("<=phone-tab") {
                    width: 20rem;
               }
          }
     }
}
</style>
