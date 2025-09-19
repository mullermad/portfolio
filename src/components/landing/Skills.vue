<script setup>

</script>
<template>
   <!-- Fixed responsive layout and spacing -->
   <div class="min-h-screen bg-gray-800 py-16 md:py-24">
      <div class="container mx-auto px-6 md:px-12 lg:px-20">
         <!-- Centered title with better spacing -->
         <h1 class="text-4xl md:text-5xl text-center text-white font-bold mb-16">
            My <span class="text-teal-400">Skills</span>
         </h1>
         
         <!-- Improved responsive grid layout -->
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <!-- Technical Skills Section -->
            <div class="space-y-8">
               <div class="text-center lg:text-left">
                  <h2 class="text-2xl md:text-3xl text-white font-bold mb-4">Technical Skills</h2>
                  <div class="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto lg:mx-0"></div>
               </div>

               <!-- Fixed progress bars with proper responsive widths -->
               <div class="space-y-6">
                  <div class="space-y-3">
                     <div class="flex items-center justify-between">
                        <h3 class="text-white font-semibold">React</h3>
                        <span class="text-teal-400 font-medium">90%</span>
                     </div>
                     <div class="w-full bg-gray-700 rounded-full h-2">
                        <div class="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out" style="width: 90%"></div>
                     </div>
                  </div>

                  <div class="space-y-3">
                     <div class="flex items-center justify-between">
                        <h3 class="text-white font-semibold">Tailwind CSS</h3>
                        <span class="text-teal-400 font-medium">90%</span>
                     </div>
                     <div class="w-full bg-gray-700 rounded-full h-2">
                        <div class="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out" style="width: 90%"></div>
                     </div>
                  </div>

                  <div class="space-y-3">
                     <div class="flex items-center justify-between">
                        <h3 class="text-white font-semibold">JavaScript</h3>
                        <span class="text-teal-400 font-medium">85%</span>
                     </div>
                     <div class="w-full bg-gray-700 rounded-full h-2">
                        <div class="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out" style="width: 85%"></div>
                     </div>
                  </div>

                  <div class="space-y-3">
                     <div class="flex items-center justify-between">
                        <h3 class="text-white font-semibold">Vue.js</h3>
                        <span class="text-teal-400 font-medium">94%</span>
                     </div>
                     <div class="w-full bg-gray-700 rounded-full h-2">
                        <div class="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out" style="width: 94%"></div>
                     </div>
                  </div>

                  <div class="space-y-3">
                     <div class="flex items-center justify-between">
                        <h3 class="text-white font-semibold">Nuxt3</h3>
                        <span class="text-teal-400 font-medium">97%</span>
                     </div>
                     <div class="w-full bg-gray-700 rounded-full h-2">
                        <div class="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out" style="width: 97%"></div>
                     </div>
                  </div>

                  <div class="space-y-3">
                     <div class="flex items-center justify-between">
                        <h3 class="text-white font-semibold">Node.js with Express</h3>
                        <span class="text-teal-400 font-medium">90%</span>
                     </div>
                     <div class="w-full bg-gray-700 rounded-full h-2">
                        <div class="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out" style="width: 90%"></div>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Personal Skills Section -->
            <div class="space-y-8">
               <div class="text-center lg:text-left">
                  <h2 class="text-2xl md:text-3xl text-white font-bold mb-4">Personal Skills</h2>
                  <div class="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto lg:mx-0"></div>
               </div>

               <!-- Improved circular progress layout for mobile -->
               <div class="space-y-8">
                  <div class="grid grid-cols-2 gap-8 justify-items-center">
                     <div class="flex flex-col items-center space-y-3">
                        <div class="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
                           <div class="absolute inset-0 rounded-full" style="background: conic-gradient(#14b8a6 0% 89%, #374151 89% 100%);"></div>
                           <div class="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center">
                              <span class="text-white font-bold text-sm md:text-lg">89%</span>
                           </div>
                        </div>
                        <p class="text-white text-sm md:text-base font-medium text-center">Communication</p>
                     </div>

                     <div class="flex flex-col items-center space-y-3">
                        <div class="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
                           <div class="absolute inset-0 rounded-full" style="background: conic-gradient(#14b8a6 0% 95%, #374151 95% 100%);"></div>
                           <div class="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center">
                              <span class="text-white font-bold text-sm md:text-lg">95%</span>
                           </div>
                        </div>
                        <p class="text-white text-sm md:text-base font-medium text-center">Teamwork</p>
                     </div>
                  </div>

                  <div class="flex justify-center">
                     <div class="flex flex-col items-center space-y-3">
                        <div class="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
                           <div class="absolute inset-0 rounded-full" style="background: conic-gradient(#14b8a6 0% 94%, #374151 94% 100%);"></div>
                           <div class="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center">
                              <span class="text-white font-bold text-sm md:text-lg">94%</span>
                           </div>
                        </div>
                        <p class="text-white text-sm md:text-base font-medium text-center">Problem Solving</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
/* Added smooth animations for progress bars */
@keyframes progressFill {
  from { width: 0%; }
  to { width: var(--progress-width); }
}
</style>
