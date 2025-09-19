<script setup>
import { useDarkness } from "../../store/storePinia"
const darkness = useDarkness()
</script>

<template>
  <div class="min-h-screen bg-gray-900 py-16 md:py-24">
    <div class="container mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <!-- Profile Image Section -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img 
              src="/src/assets/photo_1.jpg" 
              alt="Muluken Demis - Fullstack Developer"
              class="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-800 shadow-2xl transform group-hover:scale-105 transition-all duration-300"
            >
          </div>
        </div>

        <!-- Content Section -->
        <div class="w-full lg:w-1/2 space-y-6">
          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
              About 
              <span class="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            
            <div class="flex items-center space-x-3">
              <div class="w-12 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
              <p class="text-xl md:text-2xl font-semibold text-gray-300">
                Fullstack Developer
              </p>
            </div>
          </div>

          <div class="prose prose-lg prose-invert max-w-none">
            <p class="text-gray-300 leading-relaxed text-base md:text-lg">
              "Hello! I'm <span class="text-teal-400 font-semibold">Muluken Demis</span>, a dedicated
              full-stack developer with a strong focus on creating seamless digital experiences. With expertise in
              <span class="text-cyan-400">Vue.js</span>, <span class="text-cyan-400">Nuxt3</span>,
              <span class="text-cyan-400">React</span>, <span class="text-cyan-400">Node.js with Express</span>, and <span class="text-cyan-400">Go</span>, I thrive at the intersection of clean, intuitive front-end design and
              efficient, scalable back-end development."
            </p>
            
            <p class="text-gray-300 leading-relaxed text-base md:text-lg mt-4">
              Over the years, I've honed my skills in building web applications. I'm passionate about crafting solutions
              that make a real impact."
            </p>
          </div>

          <!-- Skills Highlight -->
          <div class="flex flex-wrap gap-3 pt-4">
            <span class="px-4 py-2 bg-gray-800 text-teal-400 rounded-full text-sm font-medium border border-teal-400/20 hover:border-teal-400/40 transition-colors">
              Vue.js
            </span>
            <span class="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
              Nuxt3
            </span>
            <span class="px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm font-medium border border-blue-400/20 hover:border-blue-400/40 transition-colors">
              React
            </span>
            <span class="px-4 py-2 bg-gray-800 text-green-400 rounded-full text-sm font-medium border border-green-400/20 hover:border-green-400/40 transition-colors">
              Node.js
            </span>
            <span class="px-4 py-2 bg-gray-800 text-purple-400 rounded-full text-sm font-medium border border-purple-400/20 hover:border-purple-400/40 transition-colors">
              Go
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.group:hover img {
  animation: float 3s ease-in-out infinite;
}
</style>
