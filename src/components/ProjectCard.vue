<script setup>
import Card from 'primevue/card';
import { ref } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

// <CHANGE> Added hover state management
const isHovered = ref(false);
</script>

<template>
  <div 
    class="project-card group"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- <CHANGE> Redesigned card with modern styling -->
    <div class="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 hover:border-teal-400/50">
      
      <!-- <CHANGE> Enhanced image container with overlay -->
      <div class="relative overflow-hidden">
        <img 
          :src="props.project.photo" 
          :alt="props.project.title" 
          class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- <CHANGE> Repositioned GitHub link as overlay button -->
        <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a 
            :href="props.project?.link" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-gray-900/80 backdrop-blur-sm hover:bg-teal-500 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-teal-500/25 flex items-center justify-center"
            title="View on GitHub"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- <CHANGE> Improved content section with better spacing -->
      <div class="p-6">
        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
          {{ props.project.title }}
        </h3>
        
        <p class="text-gray-300 text-sm leading-relaxed line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">
          {{ props.project.description }}
        </p>

        <!-- <CHANGE> Added tech stack or additional info section -->
        <div class="mt-4 pt-4 border-t border-gray-700">
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-400 uppercase tracking-wider">Project</span>
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span class="text-xs text-teal-400">Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* <CHANGE> Added line-clamp utility for text truncation */
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* <CHANGE> Enhanced hover animations */
.project-card {
  @apply transition-all duration-300;
}

.project-card:hover {
  @apply transform scale-[1.02];
}

/* <CHANGE> Smooth image scaling */
.project-card img {
  @apply transition-transform duration-700 ease-out;
}
</style>
