<script setup>
import ProjectCard from "../ProjectCard.vue";

import equb from "@/assets/equbsystem.png";
import nuRestaurant from "@/assets/nu_restaurant.png";
import restaurantPos from "@/assets/ImageNu2.png";
import internMentorship from "@/assets/internmentorship.png";
import cinema from "@/assets/cinema.png";

const projects = [
  {
    id: 1,
    title: "Mentorship Platform",
    description:
      "A structured platform connecting mentors and mentees to support career and personal growth through guided mentorship programs.",
    image: internMentorship,
    github: "https://github.com/mullermad",
  },
  {
    id: 2,
    title: "Digital Equb System",
    description:
      "A digital version of the traditional Ethiopian Equb — members manage rotating savings and lending securely and transparently online.",
    image: equb,
    github: "https://github.com/mullermad",
  },
  {
    id: 3,
    title: "Nu Restaurant Website",
    description:
      "A modern, elegant restaurant website showcasing menu items, reservations and events with a smooth, fully responsive design.",
    image: nuRestaurant,
  },
  {
    id: 4,
    title: "Restaurant POS System",
    description:
      "A comprehensive restaurant management system with waiter ordering, kitchen display and inventory tracking to boost efficiency.",
    image: restaurantPos,
  },
  {
    id: 5,
    title: "Cinema Ticket Booking",
    description:
      "A cinema booking app for browsing movies, checking schedules and purchasing tickets online — inspired by platforms like Fandango.",
    image: cinema,
    github: "https://github.com/mullermad",
  },
];
</script>

<template>
  <div class="relative overflow-hidden section-pad">
    <div class="glow right-[-8%] top-[15%] h-96 w-96 bg-teal-500"></div>

    <div class="container-page relative">
      <!-- Header -->
      <div class="relative mb-12 text-center" v-reveal>
        <span class="section-kicker">
          <Icon icon="ph:briefcase-bold" class="h-3.5 w-3.5" />
          Portfolio
        </span>
        <h2 class="section-title">
          Featured <span class="text-gradient">Projects</span>
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-body sm:text-lg">
          A selection of products I've designed and built.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(project, i) in projects" :key="project.id" v-reveal="(i % 3) * 120">
          <ProjectCard :project="project" />
        </div>

        <!-- "More on GitHub" card -->
        <a
          href="https://github.com/mullermad"
          target="_blank"
          rel="noopener noreferrer"
          class="card-base group flex min-h-[20rem] flex-col items-center justify-center gap-4 border-dashed p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-2xl hover:shadow-teal-500/10"
          v-reveal="240"
        >
          <span
            class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/15 to-cyan-500/15 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          >
            <Icon icon="mdi:github" class="h-8 w-8" />
          </span>
          <div>
            <h3 class="font-display text-lg font-bold text-heading">Want to see more?</h3>
            <p class="mt-1 text-sm text-body">
              Explore more projects, experiments and open-source work on my GitHub.
            </p>
          </div>
          <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            Visit GitHub
            <Icon
              icon="ph:arrow-right-bold"
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
