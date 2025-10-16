<script setup>
import { ref } from 'vue'
import ProjectCard from '../ProjectCard.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'start',
})

const breakpoints = ref({
  640: { itemsToShow: 1.5, snapAlign: 'start' },
  768: { itemsToShow: 2, snapAlign: 'start' },
  1024: { itemsToShow: 2.5, snapAlign: 'start' },
  1280: { itemsToShow: 3, snapAlign: 'start' },
})

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Vue.js frontend and Node.js backend',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Real-time collaborative task management application',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with smooth animations and responsive design',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['Nuxt3', 'Tailwind CSS', 'Animation'],
    link: '#'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['Vue.js', 'API Integration', 'Charts'],
    link: '#'
  },
]
</script>

<template>
  <div class="min-h-screen flex items-center justify-center py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span class="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
      </div>

      <!-- Carousel -->
      <div class="relative">
        <carousel 
          :wrapAround="true" 
          :autoplay="0" 
          :transition="500" 
          :breakpoints="breakpoints" 
          :settings="settings"
          class="projects-carousel"
        >
          <slide v-for="project in projects" :key="project.id" class="px-3 py-4">
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

:deep(.carousel__track) {
  @apply transition-transform duration-500 ease-out;
}
</style>
