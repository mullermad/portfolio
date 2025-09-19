<script setup>
import { ref } from "vue"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const props = defineProps({
  id1: String,
  id2: String,
  id3: String,
  id4: String,
  id5: String,
})
const currentNav = ref("home")
const handleClick = (value) => {
  currentNav.value = value
}
</script>
<template>
  <Disclosure as="nav" class="bg-gray-900/95 backdrop-blur-sm text-white fixed top-0 left-0 right-0 z-50 border-b border-gray-700/50" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Left Section: Logo -->
        <div class="flex items-center">
          <a @click="handleClick('home')" class="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:from-teal-300 hover:to-cyan-300 transition-all duration-300"
            :href="`#${props.id1}`">Mulu<span class="text-teal-400">ken</span></a>
        </div>
        
        <!-- Middle Section: Navigation Links -->
        <div class="hidden md:block">
          <div class="flex space-x-8">
            <nav class="flex flex-row gap-8 font-medium">
              <a @click="handleClick('home')" 
                class="relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
                :class="{ 'text-teal-400 bg-gray-800/50': currentNav == 'home' }" 
                :href="`#${props.id1}`">
                Home
                <span v-if="currentNav == 'home'" class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></span>
              </a>
              <a @click="handleClick('about')" 
                class="relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
                :class="{ 'text-teal-400 bg-gray-800/50': currentNav === 'about' }" 
                :href="`#${props.id2}`">
                About
                <span v-if="currentNav === 'about'" class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></span>
              </a>
              <a @click="handleClick('skills')" 
                class="relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
                :class="{ 'text-teal-400 bg-gray-800/50': currentNav === 'skills' }" 
                :href="`#${props.id3}`">
                Skills
                <span v-if="currentNav === 'skills'" class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></span>
              </a>
              <a @click="handleClick('projects')" 
                class="relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
                :class="{ 'text-teal-400 bg-gray-800/50': currentNav === 'projects' }" 
                :href="`#${props.id4}`">
                Projects
                <span v-if="currentNav === 'projects'" class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></span>
              </a>
              <a @click="handleClick('contacts')" 
                class="relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
                :class="{ 'text-teal-400 bg-gray-800/50': currentNav === 'contacts' }" 
                :href="`#${props.id5}`">
                Contacts
                <span v-if="currentNav === 'contacts'" class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></span>
              </a>
            </nav>
          </div>
        </div>

        <!-- Right Section: Mobile Menu Button -->
        <div class="md:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:bg-gray-800 hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300">
            <span class="sr-only">Open main menu</span>
            <!-- Fixed mobile menu icon by using the open variable from Disclosure slot -->
            <svg v-if="!open" class="block h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else class="block h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Panel -->
    <!-- Improved mobile navigation styling and layout -->
    <DisclosurePanel class="md:hidden bg-gray-900/98 backdrop-blur-sm border-t border-gray-700/50">
      <div class="px-4 py-3 space-y-2">
        <a @click="handleClick('home')" 
          class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
          :class="{ 'text-teal-400 bg-gray-800/50 border-l-4 border-teal-400': currentNav == 'home' }" 
          :href="`#${props.id1}`">Home</a>
        <a @click="handleClick('about')" 
          class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
          :class="{ 'text-teal-400 bg-gray-800/50 border-l-4 border-teal-400': currentNav === 'about' }" 
          :href="`#${props.id2}`">About</a>
        <a @click="handleClick('skills')" 
          class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
          :class="{ 'text-teal-400 bg-gray-800/50 border-l-4 border-teal-400': currentNav === 'skills' }" 
          :href="`#${props.id3}`">Skills</a>
        <a @click="handleClick('projects')" 
          class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
          :class="{ 'text-teal-400 bg-gray-800/50 border-l-4 border-teal-400': currentNav === 'projects' }" 
          :href="`#${props.id4}`">Projects</a>
        <a @click="handleClick('contacts')" 
          class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
          :class="{ 'text-teal-400 bg-gray-800/50 border-l-4 border-teal-400': currentNav === 'contacts' }" 
          :href="`#${props.id5}`">Contacts</a>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<style>
html {
  scroll-behavior: smooth;
}
</style>
