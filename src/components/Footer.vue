<script setup>
const year = new Date().getFullYear();

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contacts", label: "Contact" },
];

const socials = [
  { icon: "mdi:github", href: "https://github.com/mullermad", label: "GitHub" },
  { icon: "mdi:linkedin", href: "https://linkedin.com/in/muluken-demis-3b3736375", label: "LinkedIn" },
  { icon: "mdi:telegram", href: "https://t.me/AmDeMu", label: "Telegram" },
];

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
</script>

<template>
  <footer class="relative border-t border-edge bg-surface/50">
    <div class="container-page py-12">
      <div class="flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <!-- Brand -->
        <a href="#home" class="flex items-center">
          <span class="font-display text-lg font-bold text-heading">
            Muluken<span class="text-accent">.</span>
          </span>
        </a>

        <!-- Nav -->
        <nav class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            v-for="link in links"
            :key="link.id"
            :href="`#${link.id}`"
            class="text-sm font-medium text-body transition-colors hover:text-accent"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Socials -->
        <div class="flex items-center gap-3">
          <a
            v-for="social in socials"
            :key="social.icon"
            :href="social.href"
            :aria-label="social.label"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-10 w-10 items-center justify-center rounded-xl border border-edge bg-card/60 text-body transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
          >
            <Icon :icon="social.icon" class="h-5 w-5" />
          </a>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-edge pt-6 sm:flex-row"
      >
        <p class="text-sm text-muted">© {{ year }}. All rights reserved.</p>
        <button
          type="button"
          class="flex items-center gap-2 text-sm font-medium text-body transition-colors hover:text-accent"
          @click="scrollTop"
        >
          Back to top
          <span
            class="flex h-8 w-8 items-center justify-center rounded-lg border border-edge bg-card/60"
          >
            <Icon icon="ph:arrow-up-bold" class="h-4 w-4" />
          </span>
        </button>
      </div>
    </div>
  </footer>
</template>
