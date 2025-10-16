<script setup>
import { ref } from "vue"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

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

const navItems = [
  { label: 'Home', id: 'home', ref: props.id1 },
  { label: 'About', id: 'about', ref: props.id2 },
  { label: 'Skills', id: 'skills', ref: props.id3 },
  { label: 'Projects', id: 'projects', ref: props.id4 },
  { label: 'Contact', id: 'contacts', ref: props.id5 },
]
</script>

<template>
  <div>
    <Disclosure as="nav" class="bg-gray-900/95 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50 border-b border-gray-700/30" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            
          <div class="flex items-center">
            <a @click="handleClick('home')" :href="`#${props.id1}`" class="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:from-teal-300 hover:to-cyan-300 transition-all duration-300">
              Mulu<span class="text-teal-400">ken</span>
            </a>
          </div>
          
          <div class="hidden md:block">
            <nav class="flex gap-8 font-medium">
              <a v-for="item in navItems" :key="item.id"
                @click="handleClick(item.id)" 
                :href="`#${item.ref}`"
                class="relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
                :class="{ 'text-teal-400 bg-gray-800/50': currentNav === item.id }">
                {{ item.label }}
                <span v-if="currentNav === item.id" class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></span>
              </a>
            </nav>
          </div>

          <div class="md:hidden">
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:bg-gray-800 hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300">
              <span class="sr-only">Open main menu</span>
              <svg v-if="!open" class="block h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg v-else class="block h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </DisclosureButton>
          </div>
        </div>
      </div>

       Mobile Navigation Panel 
      <DisclosurePanel class="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-700/30">
        <div class="px-4 py-3 space-y-2">
          <a v-for="item in navItems" :key="item.id"
            @click="handleClick(item.id)" 
            :href="`#${item.ref}`"
            class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
            :class="{ 'text-teal-400 bg-gray-800/50 border-l-4 border-teal-400': currentNav === item.id }">
            {{ item.label }}
          </a>
        </div>
      </DisclosurePanel>
    </Disclosure>

     Added slot to render page content 
    <div class="pt-16">
      <slot />
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
