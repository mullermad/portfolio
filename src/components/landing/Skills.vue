<template>
  <div class="min-h-screen flex items-center justify-center py-16 md:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span class="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <!-- Technical Skills -->
        <div class="space-y-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Technical Skills</h2>
            <div class="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
          </div>

          <div class="space-y-6">
            <div v-for="skill in technicalSkills" :key="skill.name" class="space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="text-white font-semibold">{{ skill.name }}</h3>
                <span class="text-teal-400 font-medium">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div 
                  class="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Soft Skills -->
        <div class="space-y-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Professional Skills</h2>
            <div class="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
          </div>

          <div class="space-y-8">
            <div class="grid grid-cols-2 gap-8 justify-items-center">
              <div v-for="skill in softSkills" :key="skill.name" class="flex flex-col items-center space-y-3">
                <div class="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
                  <div 
                    class="absolute inset-0 rounded-full"
                    :style="{ background: `conic-gradient(#14b8a6 0% ${skill.level}%, #374151 ${skill.level}% 100%)` }">
                  </div>
                  <div class="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-sm md:text-lg">{{ skill.level }}%</span>
                  </div>
                </div>
                <p class="text-white text-sm md:text-base font-medium text-center">{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const technicalSkills = [
  { name: 'React', level: 90 },
   { name: 'Nextjsj', level: 90 },
  { name: 'Vue.js', level: 94 },
  { name: 'Nuxt3', level: 97 },
  { name: 'Django(DRF)', level: 75 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js & Express', level: 90 },
  { name: 'Tailwind CSS', level: 90 },
]

const softSkills = [
  { name: 'Communication', level: 89 },
  { name: 'Teamwork', level: 95 },
  { name: 'Problem Solving', level: 94 },
]
</script>
