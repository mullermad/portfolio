<script setup>
import { ref } from "vue";
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';

const firstName=ref("")
const lastName=ref("")
const phone=ref("")
const email=ref("")
const content=ref("")

</script>
<template>
 <div class="bg-black min-h-screen w-full pt-24 pb-40 flex justify-center items-center">
        <div class="flex flex-col px -5  md:px-64 items-center">
            <h1 class="text-5xl text-white font-bold md:self-center">Contact <span class="text-5xl text-teal-500">Me</span></h1>
            <div class="bg-white flex rounded-lg shadow-lg p-6 w-11/12 max-w-lg mt-8">
                <div>
                    <div class="text-center mb-6">
                        <h1 class="text-2xl font-bold text-gray-800">Contact Me</h1>
                    </div>
                    <div class="flex flex-col gap-4 md:flex-row md:justify-between"> <div class="flex items-center gap-2 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="text-blue-500" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                                    <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"/>
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/>
                                </path>
                            </svg>
                            <a href="tel:+251984198343" class="text-blue-500 font-bold hover:underline">+251 984198343</a>
                        </div>
                        <div class="flex items-center gap-2 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="text-blue-500" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-opacity="0" d="M12 11l-8 -5h16l-8 5Z">
                                    <animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"/>
                                </path>
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/>
                                    </path>
                                    <path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"/>
                                    </path>
                                </g>
                            </svg>
                            <a href="mailto:assegagebeyehu21@gmail.com" class="text-blue-500 mr-2 font-bold hover:underline">assegagebeyehu21@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>