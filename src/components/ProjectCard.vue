<script setup>
import Card from 'primevue/card';
import { Github, ExternalLink } from 'lucide-vue-next';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <!-- Complete redesign with modern card styling -->
  <div class="group h-full">
    <div class="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
      <!-- Improved image container -->
      <div class="relative overflow-hidden">
        <img 
          :src="props.project.photo" 
          :alt="props.project.title" 
          class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <!-- Better content layout and typography -->
      <div class="p-6 flex-1 flex flex-col">
        <h3 class="text-xl font-bold text-accent mb-3 line-clamp-2">
          {{ props.project.title }}
        </h3>
        
        <p class="text-card-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-4">
          {{ props.project.description }}
        </p>

        <!-- Modern action buttons -->
        <div class="flex items-center justify-between pt-4 border-t border-border">
          <div class="flex items-center space-x-3">
            <a 
              :href="props.project?.link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
            >
              <Github class="w-4 h-4 mr-2" />
              View Code
            </a>
            
            <button class="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-sm font-medium">
              <ExternalLink class="w-4 h-4 mr-2" />
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
