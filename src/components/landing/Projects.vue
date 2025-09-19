<script setup>
import { Projects } from "../../utils/ProjectDummy"
import ProjectCard from "../ProjectCard.vue"
import "vue3-carousel/dist/carousel.css";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref } from "vue";

// <CHANGE> Simplified breakpoints for better responsiveness
const settings = ref({
  itemsToShow: 1,
  snapAlign: "start",
});

const breakpoints = ref({
  640: {
    itemsToShow: 1.5,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  1024: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
  1280: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1536: {
    itemsToShow: 3.5,
    snapAlign: "start",
  },
});
</script>

<template>
  <div class="min-h-screen bg-gray-900 pt-20 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- <CHANGE> Enhanced header with better typography and spacing -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
          My <span class="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">Projects</span>
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
      </div>

      <!-- <CHANGE> Improved carousel container with better spacing -->
      <div class="relative">
        <carousel 
          :wrapAround="true" 
          :autoplay="0" 
          :transition="500" 
          :breakpoints="breakpoints" 
          :settings="settings"
          class="projects-carousel"
        >
          <slide v-for="project in Projects" :key="project.id" class="px-3 py-4">
            <ProjectCard :project="project" />
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* <CHANGE> Professional carousel navigation styling */
:deep(.carousel__prev),
:deep(.carousel__next) {
  @apply bg-gray-800/80 hover:bg-gray-700 border border-gray-600 hover:border-teal-400;
  @apply rounded-full w-12 h-12 transition-all duration-300;
  @apply backdrop-blur-sm shadow-lg;
}

:deep(.carousel__icon) {
  @apply w-6 h-6 text-white;
  fill: currentColor;
}

:deep(.carousel__prev:hover .carousel__icon),
:deep(.carousel__next:hover .carousel__icon) {
  @apply text-teal-400;
}

/* <CHANGE> Enhanced pagination dots */
:deep(.carousel__pagination) {
  @apply mt-8;
}

:deep(.carousel__pagination-button) {
  @apply w-3 h-3 rounded-full bg-gray-600 hover:bg-teal-400;
  @apply transition-all duration-300 mx-1;
}

:deep(.carousel__pagination-button--active) {
  @apply bg-teal-400 scale-125;
}

/* <CHANGE> Smooth carousel transitions */
:deep(.carousel__track) {
  @apply transition-transform duration-500 ease-out;
}
</style>
