<template>
     <div></div>
     <transition name="fade">
          <Preloader v-if="showPreloader" @fade-out="removePreloader" />
     </transition>
     <landing />
     <Campaign />
     <Arrival />
     <Collab />
     <Feature />
     <thirdsect />
     <School />
     <Cfc />
     <Download />
     <Stores />
     <Footer />
</template>

<script setup lang="ts">
import School from "./components/b2school.vue";
import thirdsect from "./components/reels.vue";
import Footer from "./components/footer.vue";
import Download from "./components/getapp.vue";
import Stores from "./components/stores.vue";
import landing from "./components/landing.vue";
import Arrival from "./components/arrivals.vue";
import Campaign from "./components/campaign.vue";
import Cfc from "./components/funclub.vue";
import Collab from "./components/collab.vue";
import Feature from "./components/featured.vue";
import { split } from "./animations/split";
import { onMounted } from "vue";
import { ref } from "@vue/reactivity";
import Preloader from "./components/preloader.vue";
const showPreloader = ref(true);
const removePreloader = () => {
     showPreloader.value = false;
};
onMounted(() => {
     split();
     window.scrollTo(0, 0);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
     transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
     opacity: 0;
}
</style>
