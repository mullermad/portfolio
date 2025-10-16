<template>
  <footer class="bg-gray-900 border-t border-gray-800/50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Mulu<span class="text-teal-400">ken</span>
          </h3>
          <p class="text-gray-400">
            Fullstack developer crafting beautiful and scalable web applications.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h4 class="text-white font-semibold">Quick Links</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#home" class="hover:text-teal-400 transition-colors">Home</a></li>
            <li><a href="#about" class="hover:text-teal-400 transition-colors">About</a></li>
            <li><a href="#projects" class="hover:text-teal-400 transition-colors">Projects</a></li>
            <li><a href="#contacts" class="hover:text-teal-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Social Links -->
        <div class="space-y-4">
          <h4 class="text-white font-semibold">Connect</h4>
          <div class="flex gap-4">
            <a href="https://github.com/mullermad" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full bg-gray-800 hover:bg-teal-500/20 hover:text-teal-400 text-gray-400 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/muluken-demis-3b3736375" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full bg-gray-800 hover:bg-teal-500/20 hover:text-teal-400 text-gray-400 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.586zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.954-1.71 1.184 0 1.915.755 1.915 1.71 0 .951-.731 1.71-1.954 1.71zm1.575 11.597H3.762V9.624h3.15v10.828zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a href="https://t.me/AmDeMu" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full bg-gray-800 hover:bg-teal-500/20 hover:text-teal-400 text-gray-400 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.461c.54-.203 1.01.122.84.951z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800/50 pt-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-gray-500 text-sm">
            © 2025 Muluken Demis. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm text-gray-500">
            <a href="#" class="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
