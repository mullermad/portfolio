<template>
  <div class="min-h-screen flex items-center justify-center py-16 md:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <!-- Profile Image -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img 
               src="/src/assets/photo_1.jpg" 
              alt="About Muluken Demis"
              class="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-800 shadow-2xl transform group-hover:scale-105 transition-all duration-300"
            >
          </div>
        </div>

        <!-- Content -->
        <div class="w-full lg:w-1/2 space-y-6">
          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
              About <span class="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <div class="flex items-center gap-3">
              <div class="w-12 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
              <p class="text-xl font-semibold text-gray-300">Fullstack Developer</p>
            </div>
          </div>

          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p class="text-lg">
              I'm <span class="text-teal-400 font-semibold">Muluken Demis</span>, a passionate fullstack developer with expertise in modern web technologies. I specialize in creating seamless digital experiences by combining intuitive frontend design with efficient backend solutions.
            </p>
            
            <p class="text-lg">
              With hands-on experience in <span class="text-cyan-400 font-semibold">Vue.js</span>, <span class="text-cyan-400 font-semibold">Nuxt3</span>, <span class="text-cyan-400 font-semibold">React</span>, and <span class="text-cyan-400 font-semibold">Node.js</span>, I thrive at building scalable applications that solve real problems. I'm committed to writing clean, maintainable code and staying updated with industry best practices.
            </p>

            <p class="text-lg">
              Beyond coding, I'm passionate about learning new technologies, contributing to open-source projects, and mentoring junior developers. I believe in continuous growth and the power of collaboration.
            </p>
          </div>

          <!-- Tech Stack -->
          <div class="pt-6 space-y-4">
            <h3 class="text-xl font-semibold text-white">Tech Stack</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-gray-800 text-teal-400 rounded-full text-sm font-medium border border-teal-400/20 hover:border-teal-400/40 transition-colors">Vue.js</span>
              <span class="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">Nuxt3</span>
              <span class="px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm font-medium border border-blue-400/20 hover:border-blue-400/40 transition-colors">React</span>
              <span class="px-4 py-2 bg-gray-800 text-green-400 rounded-full text-sm font-medium border border-green-400/20 hover:border-green-400/40 transition-colors">Node.js</span>
              <span class="px-4 py-2 bg-gray-800 text-purple-400 rounded-full text-sm font-medium border border-purple-400/20 hover:border-purple-400/40 transition-colors">Express</span>
              <span class="px-4 py-2 bg-gray-800 text-orange-400 rounded-full text-sm font-medium border border-orange-400/20 hover:border-orange-400/40 transition-colors">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
