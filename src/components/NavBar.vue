<script setup>
import {ref} from "vue"
import {Icon} from '@iconify/vue';
import {useDark} from "@vueuse/core"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const isDark=useDark()
// const toggleDark=()=>{
//     isDark.value=!isDark.value
// }
const props=defineProps({
    id1:String,
    id2:String,
    id3:String,
    id4:String,
    id5:String,
})
const currentNav=ref("home")
const handleClick=(value)=>{
    currentNav.value=value
}
</script>
<template>
<Disclosure as="nav" class="bg-black text-white fixed top-0 left-0 right-0 z-50">
    <div class="mx-auto max-w-10xl px-4 sm:px-6 lg:px-8">
      <div class="relative flex h-20 items-center justify-between">
        <!-- Left Section: Logo -->
        <div class="flex items-center">
            <a @click="handleClick('home')" class="text-2xl font-bold text-red-600 cursor-pointer" :href="`#${props.id1}`">Gebe<span class="text-blue-700">yehu</span></a>

        </div>
         <!-- Middle Section: Navigation Links -->
        <div class="hidden sm:block">
          <div class="flex space-x-4">
            <nav class="flex flex-row gap-10 font-bold">
        <a @click="handleClick('home')" class="hover:text-sky-500" :class="{'text-sky-500':currentNav=='home'}" :href="`#${props.id1}`">Home</a>
        <a @click="handleClick('about')" class="hover:text-sky-500" :class="{'text-sky-500':currentNav==='about'}"   :href="`#${props.id2}`">About</a>
        <a @click="handleClick('skills')" class="hover:text-sky-500" :class="{'text-sky-500':currentNav==='skills'}"  :href="`#${props.id3}`">Skills</a>
        <a @click="handleClick('projects')" class="hover:text-sky-500" :class="{'text-sky-500':currentNav==='projects'}"  :href="`#${props.id4}`">Projects</a>
        <a @click="handleClick('contacts')" class="hover:text-sky-500" :class="{'text-sky-500':currentNav==='contacts'}"  :href="`#${props.id5}`">Contacts</a>
         <!-- <Icon v-if="isDark"  class="cursor-pointer" @click="toggleDark" icon="solar:sun-outline" style="color:white" size="20"/>
         <Icon v-else  class="cursor-pointer"   @click="toggleDark" icon="lets-icons:moon-light" style="color:black" size="20"/> -->
     </nav>
          </div>
        </div>

        <!-- Right Section: Mobile Menu Button -->
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!open"
              class="block h-6 w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Panel -->
    <DisclosurePanel class="sm:hidden min-h-10">
      <div class="space-y-1 px-2 pb-3  pt-2">
        <DisclosureButton
         class="flex flex-col gap-2"
        >
        <a @click="handleClick('home')" class="hover:text-sky-500" :class="{'text-sky-500 bg-slate-700':currentNav=='home'}" :href="`#${props.id1}`">Home</a>
        <a @click="handleClick('about')" class="hover:text-sky-500" :class="{'text-sky-500':currentNav==='about'}"   :href="`#${props.id2}`">About</a>
        <a @click="handleClick('skills')" class="hover:text-sky-500" :class="{'text-sky-500':currentNav==='skills'}"  :href="`#${props.id3}`">Skills</a>
        <a @click="handleClick('projects')" class="hover:text-sky-500" :class="{'text-sky-500':currentNav==='projects'}"  :href="`#${props.id4}`">Projects</a>
        <a @click="handleClick('contacts')" class="hover:text-sky-500" :class="{'text-sky-500':currentNav==='contacts'}"  :href="`#${props.id5}`">Contacts</a>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<style >
  html {
    scroll-behavior: smooth;
  }
</style>