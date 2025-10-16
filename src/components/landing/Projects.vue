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

export const Projects = [
  {
    id: 1,
    title: "mentorship",
    photo: internMentorship,
    description:
      "A mentorship system is a structured platform designed to facilitate the relationship between mentors and mentees. It connects individuals seeking guidance (mentees) with experienced professionals or advisors (mentors) to help mentees achieve their personal or professional goals. Here’s a detailed description of such a system.",

    link: "https://mentorship-sooty.vercel.app/",
  },
  {
    id: 2,
    title: "Digital Equb System",
    photo: equb,
    description:
      "A Digital Equb System is an innovative platform that digitizes the traditional Ethiopian practice of Equb, a community-based savings and lending system. It brings the concept into the digital era, enabling users to participate in savings groups more efficiently, securely, and transparently through technology",
    link: "https://github.com/mullermad",
  },

  {
    id: 3,
    photo: nu_restaurant,
    title: "Nu Restaurant Website",
    description:
      "Nu Restaurant is a premier dining destination in Gondar, Ethiopia, offering a fusion of traditional and contemporary Ethiopian cuisine. The website provides an elegant platform for customers to explore the menu, make reservations, and learn about special events. Visitors can browse delicious dishes, check restaurant hours, and experience the unique ambiance of Nu Restaurant through rich visuals and engaging content.",
    link: "https://www.nu-restaurant.com/",
  },
  {
    id: 4,
    photo: restaurant_management,
    title: "Restaurant POS System",
    description: `"A comprehensive Restaurant Management System designed to streamline restaurant operations, including order management, reservations, staff coordination, and inventory tracking. The system enhances efficiency with key features such as:  
      
     Waiter Ordering System**: Allows waiters to take customer orders digitally, reducing errors and ensuring faster service. Orders are instantly sent to the kitchen display system for processing.  
      - **Kitchen Display System (KDS)**: Displays real-time orders in the kitchen, helping chefs manage preparation efficiently. It eliminates the need for paper tickets and improves workflow.  
      - **Inventory Management System**: Tracks ingredient usage, monitors stock levels, and provides alerts for low-stock items. Helps restaurants reduce waste and optimize supply chain management.  
      
      With an intuitive interface, the system simplifies restaurant workflow, ensuring smooth operations and improved service quality."`,
    link: "https://pos.nu-restaurant.com/",
  },

  {
    id: 5,
    photo: cinema,
    title: "Cinema Ticket Booking App",
    description:
      "A Cinema App is a digital platform that provides users with a seamless way to browse movies, check cinema schedules, book tickets, and engage with cinematic content. It is mainly used for booking tickets, watching movie trailers, and exploring various movie-related features. Users can view details about upcoming and currently showing movies, read synopses, check ratings and reviews, and even filter movies based on genres, directors, or actors.",
    link: "https://cinema-app-liart.vercel.app/",
  },
];

</script>

<template>
  <div class="min-h-screen flex items-center justify-center py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
       Header 
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span class="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
      </div>

       Carousel 
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
