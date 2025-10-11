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
  <div class="overflow-x-hidden">
    <NavLayout id1="home" id2="about" id3="skills" id4="projects" id5="contacts">
      <div>
        <!-- Added proper spacing and removed excessive height constraints -->
        <section id="home" class="min-h-screen bg-gray-800 text-white ">
          <Home />
        </section>
        
      
        
        <section id="skills" class="min-h-screen bg-gray-800 text-white">
          <Skills />
        </section>
        
        <section id="projects" class="min-h-screen bg-gray-800 text-white">
          <Projects />
        </section>
        
        <section id="contacts" class="min-h-screen bg-gray-800 text-white">
          <Contacts />
        </section>
      </div>
    </NavLayout>
  </div>
</template>
<style>
html {
  scroll-behavior: smooth;
}

/* Added smooth transitions between sections */
section {
  transition: all 0.3s ease-in-out;
}

/* Ensure proper spacing and alignment */
section:not(#home) {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
