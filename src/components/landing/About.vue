<script setup>
const services = [
  {
    icon: "ph:cpu-bold",
    title: "Backend Engineering",
    text: "Scalable APIs, services and data layers with Node.js, NestJS and Express.",
  },
  {
    icon: "ph:layout-bold",
    title: "Frontend Development",
    text: "Responsive, accessible interfaces with React and Next.js — styled with Tailwind CSS.",
  },
  {
    icon: "ph:buildings-bold",
    title: "ERP & Business Systems",
    text: "Custom modules, integrations and workflows on ERPNext (Frappe) and Odoo for real business operations.",
  },
];
</script>

<template>
  <div class="relative overflow-hidden section-pad">
    <div class="glow right-[-10%] top-[10%] h-80 w-80 bg-teal-500"></div>

    <div class="container-page relative">
      <!-- Header -->
      <div class="relative mb-12 text-center" v-reveal>
        <span class="section-kicker">
          <Icon icon="ph:user-bold" class="h-3.5 w-3.5" />
          About Me
        </span>
        <h2 class="section-title">
          Turning ideas into <span class="text-gradient">real products</span>
        </h2>
      </div>

      <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <!-- Code profile card -->
        <div v-reveal>
          <div class="relative">
            <div
              class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-teal-400/30 to-cyan-500/30 blur-xl"
            ></div>
            <div
              class="card-base relative animate-float-slow overflow-hidden font-mono text-sm shadow-2xl"
            >
              <!-- Window chrome -->
              <div class="flex items-center gap-2 border-b border-edge bg-surface/80 px-5 py-3.5">
                <span class="h-3 w-3 rounded-full bg-red-400"></span>
                <span class="h-3 w-3 rounded-full bg-yellow-400"></span>
                <span class="h-3 w-3 rounded-full bg-green-400"></span>
                <span class="ml-3 text-xs text-muted">developer.js</span>
              </div>
              <!-- Code -->
              <div class="space-y-1.5 overflow-x-auto p-6 leading-relaxed">
                <p><span class="text-purple-400">const</span> <span class="text-heading">developer</span> <span class="text-muted">=</span> <span class="text-muted">{</span></p>
                <p class="pl-5"><span class="text-accent2">name</span><span class="text-muted">:</span> <span class="text-amber-500 dark:text-amber-300">'Muluken Demis'</span><span class="text-muted">,</span></p>
                <p class="pl-5"><span class="text-accent2">role</span><span class="text-muted">:</span> <span class="text-amber-500 dark:text-amber-300">'Fullstack Developer'</span><span class="text-muted">,</span></p>
                <p class="pl-5"><span class="text-accent2">backend</span><span class="text-muted">:</span> <span class="text-muted">[</span><span class="text-amber-500 dark:text-amber-300">'Node.js'</span><span class="text-muted">,</span> <span class="text-amber-500 dark:text-amber-300">'NestJS'</span><span class="text-muted">],</span></p>
                <p class="pl-5"><span class="text-accent2">frontend</span><span class="text-muted">:</span> <span class="text-muted">[</span><span class="text-amber-500 dark:text-amber-300">'React'</span><span class="text-muted">,</span> <span class="text-amber-500 dark:text-amber-300">'Next.js'</span><span class="text-muted">],</span></p>
                <p class="pl-5"><span class="text-accent2">erp</span><span class="text-muted">:</span> <span class="text-muted">[</span><span class="text-amber-500 dark:text-amber-300">'ERPNext'</span><span class="text-muted">,</span> <span class="text-amber-500 dark:text-amber-300">'Odoo'</span><span class="text-muted">],</span></p>
                <p class="pl-5"><span class="text-accent2">hireable</span><span class="text-muted">:</span> <span class="text-purple-400">true</span><span class="text-muted">,</span></p>
                <p class="pl-5"><span class="text-accent2">motto</span><span class="text-muted">:</span> <span class="text-amber-500 dark:text-amber-300">'Ship quality, not excuses'</span><span class="text-muted">,</span></p>
                <p><span class="text-muted">}</span><span class="caret"></span></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Text + services -->
        <div class="space-y-10">
          <div class="space-y-4" v-reveal>
            <p class="text-base leading-relaxed text-body sm:text-lg">
              I'm <span class="font-semibold text-heading">Muluken Demis</span>, a fullstack
              developer who enjoys owning products end-to-end — from designing APIs, services
              and data models to crafting the interfaces people use every day.
            </p>
            <p class="text-base leading-relaxed text-body sm:text-lg">
              I work with <span class="text-accent">Node.js</span> and
              <span class="text-accent">NestJS</span> on the backend, and
              <span class="text-accent">React / Next.js</span> on the frontend. I also build and customize
              <span class="text-accent">ERPNext</span> and <span class="text-accent">Odoo</span>
              systems that run real business operations.
            </p>
          </div>

          <div class="space-y-5">
            <div
              v-for="(service, i) in services"
              :key="service.title"
              class="card-base group flex gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-teal-500/10"
              v-reveal="i * 120"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/15 to-cyan-500/15 text-accent transition-transform duration-300 group-hover:scale-110"
              >
                <Icon :icon="service.icon" class="h-6 w-6" />
              </div>
              <div>
                <h3 class="font-display text-lg font-bold text-heading">{{ service.title }}</h3>
                <p class="mt-1.5 text-sm leading-relaxed text-body">{{ service.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
