<script setup>
import image from "../assets/template.webp"
import Card from 'primevue/card';
const props=defineProps({
    project:{
      type:Object
    }
})
import images from "../assets/git.png"
</script>
<template>
  <div class="flex flex-col bg-white  mr-3 rounded-2xl   pb-10  relative  ring ring-transparent hover:ring-sky-500 group">
    <Card style="overflow:visible ">
      <template #header>
        <img :src="props.project.photo" alt="there is no photo" class="object-cover h-[15rem] rounded-2xl" />
      </template>
      <template #title>
        <h1 class="text-sky-500 py-2 text-2xl font-bold">{{ props.project.title }}</h1>
      </template>
      <template #content>
        <div class="relative">
          <p class="text-justify transition-all line-clamp-6 duration-300 text-[#334155] px-3  overflow-hidden text-sm">
            {{ props.project.description }}
          </p>
          <!-- Fade-out effect -->
          <!-- <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div> -->
        </div>
      </template>
    </Card>
    <div class="absolute top-[28rem] left-56 md:left-96 transition-opacity duration-300">
      <a 
  :href="props.project?.link"
  target="_blank" 
  rel="noopener noreferrer" 
  className=" w-32 py-1 rounded-xl text-center block text-white transition">
 <img :src="images" alt="this is github" class="w-8 h-8 object-cover">
</a>
    </div>
  </div>
</template>



