<script setup>
import {useDarkness} from "../../store/storePinia"
const darkness=useDarkness()
    </script>
    <template>
    <div class="min-h-screen md:pt-36 md:pb-36">
      <div class=" flex flex-row px-5 md:px-40 w-full">
        
           <div class="w-[45%] hidden md:block">
            <img src="/src/assets/gebporttt (1).png" alt="there is no image" class="rounded-full ring-[1rem] ring-teal-500 shadow-2xl shadow-cyan-500  w-96 h-96 object-contain">

           </div>
           <div class="flex flex-col mt-16 md:w-[45%] w-full">
              <h1 class="text-3xl text-white font-bold">About <span class="text-3xl text-teal-500">Me</span></h1>
                <p class="text-white text-2xl font-bold">Fullstack Developer</p>
                 <p class="text-white font-bold md:text-justify   text-base mt-7">"Hello! I’m Gebeyehu Assega, a dedicated full-stack developer with a strong focus on creating seamless digital experiences. With expertise in Vue.js, React, Node.js, and Go, I thrive at the intersection of clean, intuitive front-end design and efficient, scalable back-end development.

                Over the years, I’ve honed my skills in building web applications, I’m passionate about crafting solutions that make a real impact.</p>

           </div>

      </div>
     
   
   
     </div>
   </template>