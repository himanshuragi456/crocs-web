<template>
     <section class="stores">
          <div class="cmp">
               <div class="sect_1">
                    <h1 data-animation="paragraph">Come Say Hii!</h1>
                    <p data-animation="paragraph">See if theres a crocs store in your area. Come Shop We can’t wait to see you.</p>
                    <div class="btn">
                         <button>See Stores available</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <div class="img">
                          <div class="ds">

                          </div>
                    </div>
               </div>
          </div>
     </section>
</template>

<script setup>
 import hoverEffect from 'hover-effect'
import { onMounted } from 'vue'

onMounted(() => {
     new hoverEffect({
        parent: window.document.querySelector(".ds"),
          intensity: 0.5,
          speedOut: 3,
          speedIn:5,
        image1: require('../assets/r2.svg'),
        image2: require('../assets/r1.svg'),
        displacementImage: require('../assets/texture2.jpeg')
    });
})
</script>

<style lang="scss" scoped>
.stores {
     @include split($croc-green, $pale-green);
     .cmp {
          .sect_1 {
               color: white;
               @include media("<=tablet") {
                    width: 95%;
               }

               p {
                    width: 80%;
                    @include media("<=tablet") {
                         width: 100%;
                    }
               }
               .btn {
                    @include btn(white, white);
               }
          }
          .sect_2 {
               .img {
                    @extend %polaroid;
                    width: 38rem;
                    height: 30rem;
                    @include media("<=tablet") {
                         width: 90%;
                    }
                    .ds{
                         width: 100%;
                         height: 100%;
                    }
               }
          }
     }
}
</style>
