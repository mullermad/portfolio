<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contacts", label: "Contact" },
];

const activeSection = ref("home");
const scrolled = ref(false);
const mobileOpen = ref(false);
const isDark = ref(true);
const progress = ref(0);

let sectionObserver = null;

const onScroll = () => {
  scrolled.value = window.scrollY > 12;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0;
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

onMounted(() => {
  isDark.value = document.documentElement.classList.contains("dark");
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Scroll-spy: highlight the nav link of the section currently in view.
  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      }
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  links.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  sectionObserver?.disconnect();
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      scrolled || mobileOpen
        ? 'border-b border-edge bg-base/80 backdrop-blur-xl shadow-lg shadow-black/5'
        : 'border-b border-transparent bg-transparent'
    "
  >
    <!-- Scroll progress -->
    <div
      class="absolute left-0 top-0 h-[2.5px] bg-gradient-to-r from-teal-400 to-cyan-400 transition-[width] duration-150"
      :style="{ width: progress + '%' }"
    ></div>

    <nav class="container-page flex h-16 items-center justify-between">
      <!-- Brand -->
      <a href="#home" class="group flex items-center gap-2.5" @click="mobileOpen = false">
        <span
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 font-display text-lg font-bold text-white shadow-lg shadow-teal-500/25 transition-transform duration-300 group-hover:rotate-6"
        >
          M
        </span>
        <span class="font-display text-lg font-bold text-heading">
          Muluken<span class="text-accent">.</span>
        </span>
      </a>

      <!-- Desktop links -->
      <div class="hidden items-center gap-1 md:flex">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300"
          :class="activeSection === link.id ? 'text-accent' : 'text-body hover:text-heading'"
        >
          {{ link.label }}
          <span
            class="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300"
            :class="activeSection === link.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'"
          ></span>
        </a>
      </div>

      <!-- Right actions -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-edge bg-card/60 text-body transition-all duration-300 hover:border-accent/50 hover:text-accent"
          @click="toggleTheme"
        >
          <Icon :icon="isDark ? 'ph:sun-bold' : 'ph:moon-bold'" class="h-5 w-5" />
        </button>

        <a href="#contacts" class="btn-primary hidden !px-5 !py-2 text-sm lg:inline-flex">
          Hire Me
        </a>

        <!-- Mobile toggle -->
        <button
          type="button"
          aria-label="Toggle navigation menu"
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-edge bg-card/60 text-body transition-colors hover:text-accent md:hidden"
          @click="mobileOpen = !mobileOpen"
        >
          <Icon :icon="mobileOpen ? 'ph:x-bold' : 'ph:list-bold'" class="h-5 w-5" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div v-if="mobileOpen" class="border-t border-edge bg-base/95 backdrop-blur-xl md:hidden">
        <div class="container-page space-y-1 py-4">
          <a
            v-for="link in links"
            :key="link.id"
            :href="`#${link.id}`"
            class="block rounded-xl px-4 py-3 font-medium transition-all duration-300"
            :class="
              activeSection === link.id
                ? 'bg-accent/10 text-accent'
                : 'text-body hover:bg-card hover:text-heading'
            "
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
          <a href="#contacts" class="btn-primary mt-3 w-full" @click="mobileOpen = false">
            Hire Me
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
