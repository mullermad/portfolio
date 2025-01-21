<script setup>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
const props=defineProps({
    id1:String,
    id2:String,
    id3:String,
    id4:String,
    id5:String,
})
</script>
<template>
    <div>
    <NavBar 
    id1="home" id2="about" id3="skills" 
    id4="projects" id5="contacts"  
    >
  </NavBar>
    <main> 
    <slot></slot>
    </main>
    <!-- <Footer>
    </Footer> -->
    </div>
    </template>