<script setup>
import { ref } from 'vue'
import NavLayout from "./layouts/NavLayout.vue"
import Home from "./components/landing/Home.vue"
import About from "./components/landing/About.vue"
import Skills from "./components/landing/Skills.vue"
import Projects from "./components/landing/Projects.vue"
import Contacts from "./components/landing/Contacts.vue"
import Footer from "./components/landing/Footer.vue"
</script>

<template>
  <div class="overflow-x-hidden bg-gray-900">
    <NavLayout id1="home" id2="about" id3="skills" id4="projects" id5="contacts">
      <section id="home" class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
        <Home />
      </section>
      
      <section id="about" class="min-h-screen bg-gray-900 text-white">
        <About />
      </section>
      
      <section id="skills" class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Skills />
      </section>
      
      <section id="projects" class="min-h-screen bg-gray-900 text-white">
        <Projects />
      </section>
      
      <section id="contacts" class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Contacts />
      </section>

      <Footer />
    </NavLayout>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

section {
  transition: all 0.4s ease-in-out;
}
</style>
