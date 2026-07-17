<script setup>
const skillGroups = [
  {
    title: "Backend",
    icon: "ph:cpu-bold",
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "NestJS", icon: "logos:nestjs" },
      { name: "Express.js", icon: "simple-icons:express" },
      { name: "REST APIs", icon: "ph:plugs-connected-bold" },
    ],
  },
  {
    title: "Frontend",
    icon: "ph:paint-brush-broad-bold",
    skills: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Vue 3", icon: "logos:vue" },
      { name: "Nuxt 3", icon: "logos:nuxt-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    title: "ERP & Business Platforms",
    icon: "ph:buildings-bold",
    skills: [
      { name: "ERPNext", icon: "simple-icons:frappe" },
      { name: "Frappe Framework", icon: "simple-icons:frappe" },
      { name: "Odoo", icon: "simple-icons:odoo" },
      { name: "Custom Modules", icon: "ph:puzzle-piece-bold" },
      { name: "API Integrations", icon: "ph:plugs-connected-bold" },
      { name: "Workflow Automation", icon: "ph:flow-arrow-bold" },
    ],
  },
  {
    title: "Databases & Tools",
    icon: "ph:wrench-bold",
    skills: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Git & GitHub", icon: "logos:git-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Postman", icon: "logos:postman-icon" },
    ],
  },
];

const strengths = [
  { name: "Problem Solving", icon: "ph:puzzle-piece-bold" },
  { name: "Clean Architecture", icon: "ph:tree-structure-bold" },
  { name: "Team Collaboration", icon: "ph:users-three-bold" },
  { name: "Clear Communication", icon: "ph:chats-circle-bold" },
];
</script>

<template>
  <div class="relative overflow-hidden section-pad">
    <div class="glow left-[-12%] top-[30%] h-96 w-96 bg-cyan-500"></div>

    <div class="container-page relative">
      <!-- Header -->
      <div class="relative mb-12 text-center" v-reveal>
        <span class="section-kicker">
          <Icon icon="ph:lightning-bold" class="h-3.5 w-3.5" />
          My Skills
        </span>
        <h2 class="section-title">
          Technologies I <span class="text-gradient">work with</span>
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-body sm:text-lg">
          A full toolbox for shipping complete, production-grade products — from
          backend services to polished interfaces and business systems.
        </p>
      </div>

      <!-- Skill groups -->
      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="(group, gi) in skillGroups"
          :key="group.title"
          class="card-base p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-teal-500/10"
          v-reveal="(gi % 2) * 130"
        >
          <div class="mb-6 flex items-center gap-3">
            <span
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/15 to-cyan-500/15 text-accent"
            >
              <Icon :icon="group.icon" class="h-6 w-6" />
            </span>
            <h3 class="font-display text-xl font-bold text-heading">{{ group.title }}</h3>
          </div>

          <ul class="grid grid-cols-2 gap-3">
            <li
              v-for="skill in group.skills"
              :key="skill.name"
              class="group flex items-center gap-2.5 rounded-xl border border-edge bg-surface/60 px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/5"
            >
              <Icon
                :icon="skill.icon"
                class="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-125"
              />
              <span class="text-sm font-medium text-body group-hover:text-heading">
                {{ skill.name }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Strengths -->
      <div class="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4" v-reveal="200">
        <div
          v-for="strength in strengths"
          :key="strength.name"
          class="card-base flex items-center gap-3 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
        >
          <Icon :icon="strength.icon" class="h-6 w-6 shrink-0 text-accent" />
          <span class="text-sm font-semibold text-heading">{{ strength.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
