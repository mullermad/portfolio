<script setup>
import { Icons } from "../../utils/DummyData"
import { Icon } from '@iconify/vue';
import image from "../../assets/photo_1.jpg"

function downloadCv() {
  window.open('/cv/Muluken_Demis_Resume (5) - Copy.pdf', '_blank');
}
</script>

<template>
  <div class="bg-gray-900 py-16 md:py-24 ">
    <!-- Using same container structure as navbar for proper alignment -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
        
        <!-- Content Section -->
        <!-- Centered text alignment to match other components -->
        <div class="w-full lg:w-1/2 space-y-6 text-left">
          <!-- Combined greeting and name on same line with proper spacing -->
          <div class="space-y-4">
            <h1 class="text-lg md:text-6xl font-semibold leading-tight">
              <span class="ml-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Muluken Demis
              </span>
            </h1>
            
            <h2 class="text-xl md:text-3xl font-semibold">
              <span class="text-white/80">I am a </span>
              <span class="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Fullstack Developer
              </span>
            </h2>
          </div>
          
          <!-- Bio -->
          <!-- Centered bio text with proper max-width -->
          <p class="text-gray-300 leading-relaxed text-base md:text-lg max-w-2xl">
            Hi, I'm Muluken Demis, a passionate full-stack developer specializing in Vue.js, Nuxt 3, and React for the frontend, and Express.js for the backend. I build dynamic, scalable, and user-centric applications by combining innovative frontend interfaces with robust backend solutions.
          </p>

          <!-- Social Links -->
          <!-- Centered social links -->
          <div class="flex justify-start space-x-6 pt-4">
            <a href="https://t.me/AmDeMu" target="_blank" 
               class="social-link group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="social-icon">
                <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="1.5" d="m11.985 15.408l3.242 3.686c1.2 1.365 1.801 2.048 2.43 1.881c.628-.166.844-1.064 1.275-2.861l2.39-9.968c.665-2.768.997-4.151.259-4.834s-2.017-.175-4.575.84L5.14 8.865c-2.046.813-3.069 1.219-3.134 1.917a1 1 0 0 0 0 .214c.063.699 1.084 1.108 3.128 1.927c.925.371 1.388.557 1.72.912q.056.06.108.124c.306.38.436.88.697 1.876l.489 1.867c.253.97.38 1.456.713 1.522s.622-.336 1.201-1.141zm0 0l-.317-.33c-.362-.378-.543-.566-.543-.8s.18-.423.543-.8l3.573-3.724" />
              </svg>
            </a>
            
            <a href="http://www.linkedin.com/in/muluken-demis-3b3736375" target="_blank" 
               class="social-link group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="social-icon">
                <path fill="currentColor" fill-rule="evenodd"
                  d="M5 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V8.75zM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.8 7.8 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.3 6.3 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75z"
                  clip-rule="evenodd" />
              </svg>
            </a>
            
            <a href="https://github.com/mullermad" target="_blank" 
               class="social-link group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" class="social-icon">
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24s-10.745 24-24 24S0 37.255 0 24" />
                  <path d="M19.183 45.472q-.29-.375 0-6.674q-3.107.108-3.927-.431c-.819-.539-1.64-2.2-2.367-3.371s-2.343-1.356-2.995-1.618c-.652-.261-.816-1.328 1.797-.522c2.613.807 2.74 3.005 3.565 3.518c.825.514 2.796.29 3.689-.122s.827-1.944.987-2.551c.201-.567-.509-.693-.524-.697c-.873 0-5.454-.997-6.713-5.433c-1.258-4.437.363-7.337 1.228-8.583q.864-1.248-.153-5.314Q17.466 13.2 19.473 16c.002.01 1.756-1.043 4.527-1.043s3.755.858 4.514 1.043s1.366-3.266 6.053-2.326c-.979 1.923-1.798 4.326-1.173 5.314c.626.987 3.08 4.127 1.573 8.583q-1.509 4.455-5.929 5.433q-.506.162-.506.522c0 .36.456.399 1.114 2.086q.66 1.686.096 9.635q-1.427.363-2.22.488c-.937.147-1.955.23-2.955.261c-1 .032-1.347.029-2.73-.1a20 20 0 0 1-2.654-.424" />
                </g>
              </svg>
            </a>
          </div>

          <!-- CTA Button -->
          <!-- Centered CTA button -->
          <div class="pt-6 flex justify-start">
            <button @click="downloadCv"
              class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full hover:from-teal-400 hover:to-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1">
              <span class="relative z-10 flex items-center gap-2">
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-y-0.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </span>
            </button>
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

<style scoped>
/* Social Links */
.social-link {
  @apply p-3 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-cyan-500/20 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-1;
}

.social-icon {
  @apply text-gray-400 transition-colors duration-300 group-hover:text-teal-400;
}

/* CTA Button */
.cta-button {
  @apply relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-1 w-fit;
}

.cta-button::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 transition-opacity duration-300;
}

.cta-button:hover::before {
  @apply opacity-100;
}

/* Image Container */
.image-container {
  @apply relative;
}

.image-glow {
  @apply absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/30 to-cyan-500/30 blur-2xl scale-110 opacity-50 transition-all duration-500 group-hover:opacity-75 group-hover:scale-125;
}

.profile-image {
  @apply relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-700/50 shadow-2xl transition-all duration-500 group-hover:border-teal-400/50 group-hover:shadow-teal-500/25;
}

/* Animation for role text */
@keyframes slideIn {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.frontend-developer {
  display: inline-block;
  animation: slideIn 2s ease-out forwards;
  white-space: nowrap;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .profile-image {
    @apply w-64 h-64;
  }
}
</style>
