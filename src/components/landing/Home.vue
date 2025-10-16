<script setup>
function downloadCv() {
  window.open('/cv/Muluken_Demis_Resume (5) - Copy.pdf', '_blank');
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center py-16 md:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <!-- Content Section -->
        <div class="w-full lg:w-1/2 space-y-8">
          <div class="space-y-4">
            <h1 class="text-5xl md:text-7xl font-bold leading-tight text-white">
              Hi, I'm <span class="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Muluken</span>
            </h1>
            <h2 class="text-2xl md:text-3xl font-semibold text-gray-300">
              Fullstack Developer 
            </h2>
          </div>
          
        
           <p class="text-lg text-gray-400 leading-relaxed max-w-xl">
              "Hello! I'm <span class="text-teal-400 font-semibold">Muluken Demis</span>, a dedicated
              full-stack developer with a strong focus on creating seamless digital experiences. With expertise in
             <span class="text-cyan-400">React</span>, <span class="text-cyan-400">Next.js</span>,
              <span class="text-cyan-400">Vue.js</span>, <span class="text-cyan-400">Nuxt3</span>,
             , <span class="text-cyan-400">Node.js with Express</span>,  <span class="text-cyan-400">Django(DRF)</span>,and <span class="text-cyan-400">Go</span>, I thrive at the intersection of clean, intuitive front-end design and
              efficient, scalable back-end development."
            </p>

          <!-- Social Links -->
          <div class="flex gap-4 pt-4">
            <a href="https://github.com/mullermad" target="_blank" rel="noopener noreferrer"
              class="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 hover:bg-teal-500/20 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-gray-400 hover:text-teal-400 transition-colors">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/muluken-demis-3b3736375" target="_blank" rel="noopener noreferrer"
              class="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 hover:bg-teal-500/20 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-gray-400 hover:text-teal-400 transition-colors">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.586zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.954-1.71 1.184 0 1.915.755 1.915 1.71 0 .951-.731 1.71-1.954 1.71zm1.575 11.597H3.762V9.624h3.15v10.828zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a href="https://t.me/AmDeMu" target="_blank" rel="noopener noreferrer"
              class="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 hover:bg-teal-500/20 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-gray-400 hover:text-teal-400 transition-colors">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.461c.54-.203 1.01.122.84.951z"/>
              </svg>
            </a>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 pt-8">
            <button @click="downloadCv"
              class="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-1">
              Download CV
            </button>
            <a href="#contacts"
              class="px-8 py-3 border-2 border-teal-400 text-teal-400 font-semibold rounded-lg hover:bg-teal-400/10 transition-all duration-300 hover:-translate-y-1">
              Get in Touch
            </a>
          </div>
        </div>

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
      </div>
    </div>
  </div>
</template>
