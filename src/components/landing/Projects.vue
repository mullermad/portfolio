<script setup>
import { Projects } from "../../utils/ProjectDummy"
import ProjectCard from "./ProjectCard.vue"
import "vue3-carousel/dist/carousel.css";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref } from "vue";

const settings = ref({
  itemsToShow: 1,
  snapAlign: "start",
});

const breakpoints = ref({
  640: {
    itemsToShow: 1.2,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 1.5,
    snapAlign: "start",
  },
  1024: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  1280: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
  1536: {
    itemsToShow: 3,
    snapAlign: "start",
  },
});
</script>

<template>
  <!-- Updated background and improved spacing -->
  <div class="min-h-screen bg-background pt-20 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Improved typography and spacing -->
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          My <span class="text-accent">Projects</span>
        </h1>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my latest work and creative solutions
        </p>
      </div>

      <!-- Enhanced carousel with better styling -->
      <carousel 
        :wrapAround="true" 
        :autoplay="0" 
        :transition="700" 
        :breakpoints="breakpoints" 
        :settings="settings"
        class="w-full"
      >
        <slide 
          v-for="project in Projects" 
          :key="project.id"
          class="px-3 py-4"
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

<style>
/* Modern carousel navigation styling */
.carousel__prev,
.carousel__next {
  color: rgb(255 255 255);
  background: rgba(38, 38, 38, 0.8);
  border: 1px solid rgb(75 85 99);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}

.carousel__prev:hover,
.carousel__next:hover {
  background: rgba(21, 128, 61, 0.9);
  border-color: rgb(132, 204, 22);
  transform: scale(1.05);
}

.carousel__icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

/* Modern pagination styling */
.carousel__pagination {
  padding: 16px 0;
}

.carousel__pagination-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(75, 85, 99, 0.5);
  border: none;
  margin: 0 4px;
  transition: all 0.3s ease;
}

.carousel__pagination-button--active {
  background: rgb(132, 204, 22);
  transform: scale(1.2);
}

.carousel__pagination-button:hover {
  background: rgba(132, 204, 22, 0.7);
}
</style>
