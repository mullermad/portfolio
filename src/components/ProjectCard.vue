<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article
    v-tilt="6"
    class="card-base shine group flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-teal-500/15"
  >
    <!-- Image -->
    <div class="relative h-52 overflow-hidden bg-surface">
      <img
        :src="project.image"
        :alt="project.title"
        loading="lazy"
        class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <!-- Hover overlay with actions -->
      <div
        class="absolute inset-0 flex items-center justify-center gap-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <a
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex translate-y-3 items-center gap-2 rounded-xl bg-white/95 px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:bg-white group-hover:translate-y-0"
        >
          <Icon icon="ph:arrow-square-out-bold" class="h-4 w-4" />
          Live Demo
        </a>
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source on GitHub"
          class="flex h-10 w-10 translate-y-3 items-center justify-center rounded-xl bg-gray-900/90 text-white shadow-lg transition-all duration-300 delay-75 hover:bg-gray-900 group-hover:translate-y-0"
        >
          <Icon icon="mdi:github" class="h-5 w-5" />
        </a>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col gap-3 p-6">
      <h3
        class="font-display text-lg font-bold text-heading transition-colors duration-300 group-hover:text-accent"
      >
        {{ project.title }}
      </h3>

      <p class="flex-1 text-sm leading-relaxed text-body">
        {{ project.description }}
      </p>

      <span
        class="inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-accent"
      >
        View Project
        <Icon
          icon="ph:arrow-right-bold"
          class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </div>
  </article>
</template>
