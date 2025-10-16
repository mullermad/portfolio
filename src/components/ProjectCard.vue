<template>
  <div class="group h-full bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
    <!-- Image -->
    <div class="relative overflow-hidden h-48 bg-gray-700">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <!-- Content -->
    <div class="p-6 space-y-4">
      <h3 class="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
        {{ project.title }}
      </h3>
      
      <p class="text-gray-400 text-sm leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 pt-2">
        <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 bg-gray-700/50 text-teal-400 text-xs font-medium rounded-full border border-teal-400/20">
          {{ tag }}
        </span>
      </div>

      <!-- Link -->
      <a :href="project.link" class="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold text-sm pt-2 transition-colors">
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 7h10v10"></path>
          <path d="M7 17L17 7"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>
