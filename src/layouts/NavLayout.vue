<script setup>
import NavBar from "../components/NavBar.vue";
const props = defineProps({
    id1: String,
    id2: String,
    id3: String,
    id4: String,
    id5: String,
})
</script>
<template>
    <div>
        <NavBar
            :id1="props.id1" :id2="props.id2" :id3="props.id3"
            :id4="props.id4" :id5="props.id5"
        />
        <main>
            <slot></slot>
        </main>
    </div>
</template>
