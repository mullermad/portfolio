<script setup>
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const props = defineProps({
  id1: String, // Home
  id3: String, // Skills
  id4: String, // Projects
  id5: String, // Contact
});

const currentNav = ref("home");

const handleClick = (value) => {
  currentNav.value = value;
};
</script>

<template>
  <Disclosure
    as="nav"
    class="bg-gray-900/95 backdrop-blur-sm text-white fixed top-0 left-0 right-0 z-50 border-b border-gray-700/50"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
     
        <div class="flex items-center">
          <a
            @click="handleClick('home')"
            :href="`#${props.id1}`"
            class="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:from-teal-300 hover:to-cyan-300 transition-all duration-300"
          >
            Mulu<span class="text-teal-400">ken</span>
          </a>
        </div>

        <div class="hidden md:block">
          <nav class="flex flex-row gap-8 font-medium">
            <a
              @click="handleClick('home')"
              :href="`#${props.id1}`"
              class="relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
              :class="{ 'text-teal-400 bg-gray-800/50': currentNav === 'home' }"
            >
              Home
            </a>

          

            <a
              @click="handleClick('skills')"
              :href="`#${props.id3}`"
              class="relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
              :class="{ 'text-teal-400 bg-gray-800/50': currentNav === 'skills' }"
            >
              Skills
            </a>

            <a
              @click="handleClick('projects')"
              :href="`#${props.id4}`"
              class="relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
              :class="{ 'text-teal-400 bg-gray-800/50': currentNav === 'projects' }"
            >
              Projects
            </a>

            <a
              @click="handleClick('contacts')"
              :href="`#${props.id5}`"
              class="relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
              :class="{ 'text-teal-400 bg-gray-800/50': currentNav === 'contacts' }"
            >
              Contact
            </a>
          </nav>
        </div>

        <div class="md:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:bg-gray-800 hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!open"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden bg-gray-900/98 backdrop-blur-sm border-t border-gray-700/50">
      <div class="px-4 py-3 space-y-2">
        <a
          @click="handleClick('home')"
          :href="`#${props.id1}`"
          class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
          :class="{ 'text-teal-400 bg-gray-800/50 border-l-4 border-teal-400': currentNav === 'home' }"
        >
          Home
        </a>
        <a
          @click="handleClick('about')"
          :href="`#${props.id2}`"
          class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
          :class="{ 'text-teal-400 bg-gray-800/50 border-l-4 border-teal-400': currentNav === 'about' }"
        >
          About
        </a>
        <a
          @click="handleClick('skills')"
          :href="`#${props.id3}`"
          class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
          :class="{ 'text-teal-400 bg-gray-800/50 border-l-4 border-teal-400': currentNav === 'skills' }"
        >
          Skills
        </a>
        <a
          @click="handleClick('projects')"
          :href="`#${props.id4}`"
          class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
          :class="{ 'text-teal-400 bg-gray-800/50 border-l-4 border-teal-400': currentNav === 'projects' }"
        >
          Projects
        </a>
        <a
          @click="handleClick('contacts')"
          :href="`#${props.id5}`"
          class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:text-teal-400 hover:bg-gray-800/50"
          :class="{ 'text-teal-400 bg-gray-800/50 border-l-4 border-teal-400': currentNav === 'contacts' }"
        >
          Contact
        </a>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
