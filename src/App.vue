<script setup>
import { ref } from 'vue';
import NavLayout from "../src/layouts/NavLayout.vue"
import About from "./components/landing/About.vue"
import Contacts from "./components/landing/Contacts.vue"
import Home from "./components/landing/Home.vue"
import Projects from "./components/landing/Projects.vue"
import Skills from "./components/landing/Skills.vue"
</script>
<template>
  <div class="overflow-x-hidden overflow-y-hidden">
    <NavLayout id1="home" id2="about " id3="skills" id4="projects" id5="contacts">
    <div>
      <section id="home" class="min-h-screen bg-black text-white">
       <Home/>
    </section>
     <section id="about" class="min-h-screen bg-black text-white">
       <About/>
    </section>
     <section id="skills" class="min-h-screen bg-black text-white">
      <Skills/>
    </section>
       <section id="projects" class="min-h-screen bg-black text-white">
        <Projects/>
    </section>
      <section id="contacts" class="min-h-screen bg-black text-white">
        <Contacts/>
    </section>
    </div>
    </NavLayout>
  </div>
</template>
<style >
  html {
   scroll-behavior: smooth;
}
</style>
