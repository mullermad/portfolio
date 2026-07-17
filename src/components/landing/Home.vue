<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const roles = [
  "Fullstack Developer",
  "Backend — Node.js · NestJS · Express.js",
  "Frontend — React · Next.js · Vue 3 · Nuxt 3",
];

const typedText = ref("");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
let typingTimer = null;

// Simple type / pause / delete loop over the roles list.
const tick = () => {
  const current = roles[roleIndex];
  let delay = deleting ? 30 : 65;

  if (!deleting) {
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      delay = 2000;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 350;
    }
  }
  typedText.value = current.slice(0, charIndex);
  typingTimer = setTimeout(tick, delay);
};

// Terminal lines appear one by one, then the whole loop restarts.
const termLines = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "muluken-demis · fullstack developer" },
  { type: "cmd", text: "cat focus.txt" },
  { type: "out", text: "Node.js · NestJS · Express · React · Next.js · Vue · Nuxt" },
  { type: "cmd", text: "ls skills/" },
  { type: "out", text: "backend/   frontend/   erp/   devops/" },
  { type: "cmd", text: "ls skills/erp" },
  { type: "out", text: "erpnext   frappe   odoo" },
  { type: "cmd", text: "./status --now" },
  { type: "accent", text: "● open to new opportunities" },
];

const visibleLines = ref(0);
let termTimer = null;

const advanceTerminal = () => {
  if (visibleLines.value < termLines.length) {
    visibleLines.value++;
    termTimer = setTimeout(advanceTerminal, visibleLines.value % 2 === 1 ? 500 : 800);
  } else {
    termTimer = setTimeout(() => {
      visibleLines.value = 0;
      advanceTerminal();
    }, 6000);
  }
};

onMounted(() => {
  typingTimer = setTimeout(tick, 400);
  termTimer = setTimeout(advanceTerminal, 800);
});

const heroEl = ref(null);
const onSpot = (e) => {
  const el = heroEl.value;
  if (!el) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
};
onBeforeUnmount(() => {
  clearTimeout(typingTimer);
  clearTimeout(termTimer);
});

const socials = [
  { icon: "mdi:github", href: "https://github.com/mullermad", label: "GitHub" },
  { icon: "mdi:linkedin", href: "https://linkedin.com/in/muluken-demis-3b3736375", label: "LinkedIn" },
  { icon: "mdi:telegram", href: "https://t.me/AmDeMu", label: "Telegram" },
];

function downloadCv() {
  window.open("/cv/Muluken_Demis_Resume (5) - Copy.pdf", "_blank");
}
</script>

<template>
  <div
    ref="heroEl"
    class="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16"
    @mousemove="onSpot"
  >
    <!-- Background decoration -->
    <div class="aurora aurora-1"></div>
    <div class="aurora aurora-2"></div>
    <div class="aurora aurora-3"></div>
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(var(--c-edge)/0.35)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--c-edge)/0.35)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_30%,transparent_100%)]"
    ></div>
    <div class="spotlight" aria-hidden="true"></div>

    <div class="container-page relative flex-1 py-16 md:py-20">
      <div class="flex h-full flex-col items-center gap-14 lg:flex-row lg:gap-16">
        <!-- Text -->
        <div class="w-full space-y-7 text-center lg:w-[55%] lg:text-left">
          <span
            v-reveal
            class="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
          >
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Available for new opportunities
          </span>

          <h1
            v-reveal="100"
            class="font-display text-2xl font-bold leading-tight text-heading sm:text-3xl"
          >
            Hi, I'm <span class="text-gradient-animated">Muluken Demis</span>
          </h1>

          <p
            v-reveal="200"
            class="min-h-[3.5rem] font-mono text-base text-body sm:min-h-[2rem] sm:text-lg md:text-xl"
          >
            <span class="caret text-heading">{{ typedText }}</span>
          </p>

          <p
            v-reveal="300"
            class="mx-auto max-w-xl text-base leading-relaxed text-body sm:text-lg lg:mx-0"
          >
            As a <span class="font-semibold text-accent">fullstack developer</span>,
            I architect and ship robust APIs, services and data layers with
            <span class="font-semibold text-accent">Node.js</span>,
            <span class="font-semibold text-accent">NestJS</span> and
            <span class="font-semibold text-accent">Express.js</span>, and pair them with
            polished frontends in
            <span class="font-semibold text-accent">React / Next.js</span> and
            <span class="font-semibold text-accent">Vue 3 / Nuxt 3</span>. I also build and
            customize ERPNext & Odoo business systems.
          </p>

          <!-- CTAs -->
          <div
            v-reveal="400"
            class="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a href="#projects" class="btn-primary">
              <Icon icon="ph:rocket-launch-bold" class="h-5 w-5" />
              View My Work
            </a>
            <button type="button" class="btn-ghost" @click="downloadCv">
              <Icon icon="ph:download-simple-bold" class="h-5 w-5" />
              Download CV
            </button>
          </div>

          <!-- Socials -->
          <div
            v-reveal="500"
            class="flex items-center justify-center gap-3 pt-2 lg:justify-start"
          >
            <span class="hidden h-px w-12 bg-edge sm:block"></span>
            <a
              v-for="social in socials"
              :key="social.icon"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-edge bg-card/60 text-body transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-teal-500/10"
            >
              <Icon :icon="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Animated terminal -->
        <div class="w-full max-w-xl lg:w-[45%]" v-reveal="150">
          <div class="relative animate-float-slow">
            <div
              class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-teal-400/25 to-cyan-500/25 blur-xl"
            ></div>
            <div
              v-tilt="5"
              class="card-base relative overflow-hidden font-mono text-[13px] shadow-2xl sm:text-sm"
            >
              <!-- Window chrome -->
              <div class="flex items-center gap-2 border-b border-edge bg-surface/80 px-5 py-3.5">
                <span class="h-3 w-3 rounded-full bg-red-400"></span>
                <span class="h-3 w-3 rounded-full bg-yellow-400"></span>
                <span class="h-3 w-3 rounded-full bg-green-400"></span>
                <span class="ml-3 flex items-center gap-1.5 text-xs text-muted">
                  <Icon icon="ph:terminal-window-bold" class="h-3.5 w-3.5" />
                  muluken@dev — zsh
                </span>
              </div>
              <!-- Terminal body (fixed height so the loop doesn't shift layout) -->
              <div class="h-[19rem] space-y-1.5 overflow-hidden p-5 leading-relaxed sm:h-[21rem] sm:p-6">
                <template v-for="(line, i) in termLines">
                  <p v-if="i < visibleLines" :key="i" class="animate-term-in">
                    <template v-if="line.type === 'cmd'">
                      <span class="mr-3 font-bold text-accent">➜</span>
                      <span class="mr-3 text-accent2">~</span>
                      <span class="text-heading">{{ line.text }}</span>
                    </template>
                    <span v-else-if="line.type === 'accent'" class="font-semibold text-accent">
                      {{ line.text }}
                    </span>
                    <span v-else class="text-body">{{ line.text }}</span>
                  </p>
                </template>
                <p v-if="visibleLines >= termLines.length">
                  <span class="mr-3 font-bold text-accent">➜</span>
                  <span class="mr-3 text-accent2">~</span>
                  <span class="caret"></span>
                </p>
              </div>
            </div>

            <!-- Floating badges (hidden on small screens to avoid overflow) -->
            <div
              class="card-base absolute -top-7 right-6 hidden animate-float items-center gap-2.5 px-4 py-2.5 shadow-xl sm:flex"
            >
              <Icon icon="ph:cpu-bold" class="h-6 w-6 text-accent" />
              <div>
                <p class="text-sm font-bold text-heading">Backend First</p>
                <p class="text-xs text-muted">APIs · Systems · Data</p>
              </div>
            </div>
            <div
              class="card-base absolute -bottom-6 -left-3 hidden animate-float-slow items-center gap-2.5 px-4 py-2.5 shadow-xl sm:flex"
            >
              <Icon icon="ph:buildings-bold" class="h-6 w-6 text-accent2" />
              <div>
                <p class="text-sm font-bold text-heading">ERP Systems</p>
                <p class="text-xs text-muted">ERPNext · Odoo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.animate-term-in {
  animation: term-in 0.3s ease both;
}

@keyframes term-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
