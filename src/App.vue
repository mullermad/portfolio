<script setup>
import NavBar from "./components/NavBar.vue";
import Home from "./components/landing/Home.vue";
import About from "./components/landing/About.vue";
import Skills from "./components/landing/Skills.vue";
import Projects from "./components/landing/Projects.vue";
import Contacts from "./components/landing/Contacts.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="overflow-x-hidden bg-base text-body">
    <NavBar />

    <main>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills" class="bg-surface/40">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contacts" class="bg-surface/40">
        <Contacts />
      </section>
    </main>

    <Footer />
  </div>
</template>
