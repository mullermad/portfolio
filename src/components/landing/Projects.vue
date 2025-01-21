<script setup>
import {Projects} from "../../utils/ProjectDummy"
import ProjectCard from "../ProjectCard.vue"
import "vue3-carousel/dist/carousel.css";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";  
import { ref } from "vue";
const settings = ref({
  itemsToShow: 1,
  snapAlign: "start",
});
const breakpoints = ref({
  // 780 and up
  300: {
    itemsToShow: 1.0,
    snapAlign: "start",
  },
  350: {
    itemsToShow: 1.0,
    snapAlign: "start",
  },
  400: {
    itemsToShow: 1.0,
    snapAlign: "start",
  },
  450: {
    itemsToShow: 1.0,
    snapAlign: "start",
  },
  500: {
    itemsToShow: 1.09,
    snapAlign: "start",
  },
  550: {
    itemsToShow: 1.18,
    snapAlign: "start",
  },
  600: {
    itemsToShow: 1.28,
    snapAlign: "start",
  },
  620: {
    itemsToShow: 1.3,
    snapAlign: "start",
  },

  650: {
    itemsToShow: 1.4,
    snapAlign: "start",
  },
  // 1067 and up
  700: {
    itemsToShow: 1.5,
    snapAlign: "start",
  },
  750: {
    itemsToShow: 1.5,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 1.4,
    snapAlign: "start",
  },
  800: {
    itemsToShow: 1.5,
    snapAlign: "start",
  },
  850: {
    itemsToShow: 1.6,
    snapAlign: "start",
  },
  900: {
    itemsToShow: 1.7,
    snapAlign: "start",
  },
  950: {
    itemsToShow: 1.8,
    snapAlign: "start",
  },
  1000: {
    itemsToShow: 1.8,
    snapAlign: "start",
  },
  1050: {
    itemsToShow: 1.9,
    snapAlign: "start",
  },
  1100: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  1150: {
    itemsToShow: 2.1,
    snapAlign: "start",
  },
  1200: {
    itemsToShow: 2.2,
    snapAlign: "start",
  },
  1250: {
    itemsToShow: 2.3,
    snapAlign: "start",
  },
  1300: {
    itemsToShow: 2.4,
    snapAlign: "start",
  },
  1350: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
  // 1340 and up
  1400: {
    itemsToShow: 2.6,
    snapAlign: "start",
  },
  // 1536 and up
  1450: {
    itemsToShow: 2.7,
    snapAlign: "start",
  },
  1500: {
    itemsToShow: 2.8,
    snapAlign: "start",
  },
  1550: {
    itemsToShow: 2.9,
    snapAlign: "start",
  },
  1600: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1650: {
    itemsToShow: 3.1,
    snapAlign: "start",
  },
  1700: {
    itemsToShow: 3.2,
    snapAlign: "start",
  },
  1750: {
    itemsToShow: 3.3,
    snapAlign: "start",
  },
  1800: {
    itemsToShow: 3.4,
    snapAlign: "start",
  },
  1850: {
    itemsToShow: 3.5,
    snapAlign: "start",
  },
  1900: {
    itemsToShow: 3.6,
    snapAlign: "start",
  },
  1950: {
    itemsToShow: 3.7,
    snapAlign: "start",
  },
  2000: {
    itemsToShow: 3.8,
    snapAlign: "start",
  },
});
</script>
<template>
    
 <div class="min-h-screen bg-black pt-32 flex w-full px-5 md:px-10">
   <div class=" flex  flex-col gap-y-5 ">
      <h1 class="text-5xl text-white self-center font-bold">My <span class=" text-teal-500">Projects</span></h1>
       <carousel
  
       :wrapAround="true"
        :autoplay="0"
       :transition="700"
        :breakpoints="breakpoints"
        :settings="settings"
       
      class="w-auto mt-4 md:mt-7 h-full" 
      >
        <slide
           
          v-for="project in Projects"
          :key="project.id"
           class="px-0 md:px-5 xl:px-5 2xl:px-5 dark:text-white h-auto py-2"

        >
          <ProjectCard :project="project" />
        </slide>

       <template #addons>
      <navigation />
      <pagination />
    </template>
      </carousel>
   </div>
    
 </div>
</template>

<style >

.carousel__prev,
.carousel__next {
  color: #058075;
  padding: 5px; 
 
  width: 70px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, border-color 0.3s ease; /* Smooth transitions */
}




.carousel__icon {
  width: 120px;
  height: 100px;
  fill: #046654; 
}
</style>