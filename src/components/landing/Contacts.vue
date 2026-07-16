<script setup>
import { ref, computed } from "vue";

// Get a free access key at https://web3forms.com (takes ~2 min):
// enter mulukendemis44@gmail.com, they email you the key, paste it here.
// Messages submitted through the form then arrive straight in that inbox.
const WEB3FORMS_ACCESS_KEY = "02135278-7214-4ab7-9c24-98482640743b";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const status = ref("idle"); // idle | sending | sent | error

const channels = [
  {
    icon: "ph:envelope-simple-bold",
    label: "Email",
    value: "mulukendemis44@gmail.com",
    href: "mailto:mulukendemis44@gmail.com",
  },
  {
    icon: "ph:phone-bold",
    label: "Phone",
    value: "+251 943 438 385",
    href: "tel:+251943438385",
  },
  {
    icon: "mdi:telegram",
    label: "Telegram",
    value: "@AmDeMu",
    href: "https://t.me/AmDeMu",
  },
  {
    icon: "ph:map-pin-bold",
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: null,
  },
];

const buttonLabel = computed(() => {
  switch (status.value) {
    case "sending":
      return "Sending...";
    case "sent":
      return "Message Sent! ✓";
    case "error":
      return "Failed — try again or email me directly";
    default:
      return "Send Message";
  }
});

const submitForm = async () => {
  const mailSubject = subject.value || `Portfolio inquiry from ${name.value}`;

  // Fallback while no access key is configured: open the visitor's mail app.
  if (!WEB3FORMS_ACCESS_KEY) {
    const body = `Hi Muluken,\n\n${message.value}\n\n— ${name.value}\n${email.value}`;
    window.location.href = `mailto:mulukendemis44@gmail.com?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(body)}`;
    status.value = "sent";
    setTimeout(() => (status.value = "idle"), 4000);
    return;
  }

  status.value = "sending";
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value,
        email: email.value,
        subject: mailSubject,
        message: message.value,
      }),
    });
    const data = await res.json();
    if (data.success) {
      status.value = "sent";
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    } else {
      status.value = "error";
    }
  } catch {
    status.value = "error";
  }
  setTimeout(() => (status.value = "idle"), 5000);
};
</script>

<template>
  <div class="relative overflow-hidden section-pad">
    <div class="glow bottom-[-10%] left-[-10%] h-96 w-96 bg-cyan-500"></div>

    <div class="container-page relative">
      <!-- Header -->
      <div class="relative mb-20 text-center" v-reveal>
        <span class="ghost-word" aria-hidden="true">CONTACT</span>
        <span class="section-kicker">
          <Icon icon="ph:paper-plane-tilt-bold" class="h-3.5 w-3.5" />
          Contact
        </span>
        <h2 class="section-title">
          Let's build something <span class="text-gradient">together</span>
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-body sm:text-lg">
          Have a project in mind, a role to fill, or just want to say hi? My inbox is
          always open.
        </p>
      </div>

      <div class="grid gap-10 lg:grid-cols-5 lg:gap-14">
        <!-- Channels -->
        <div class="space-y-4 lg:col-span-2" v-reveal>
          <component
            :is="channel.href ? 'a' : 'div'"
            v-for="(channel, i) in channels"
            :key="channel.label"
            :href="channel.href || undefined"
            :target="channel.href?.startsWith('http') ? '_blank' : undefined"
            :rel="channel.href?.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="card-base group flex items-center gap-4 p-5 transition-all duration-300"
            :class="channel.href ? 'hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-teal-500/10' : ''"
            v-reveal="i * 100"
          >
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/15 to-cyan-500/15 text-accent transition-transform duration-300 group-hover:scale-110"
            >
              <Icon :icon="channel.icon" class="h-6 w-6" />
            </span>
            <div class="min-w-0">
              <p class="text-xs font-medium uppercase tracking-wider text-muted">
                {{ channel.label }}
              </p>
              <p class="truncate font-semibold text-heading">{{ channel.value }}</p>
            </div>
            <Icon
              v-if="channel.href"
              icon="ph:arrow-up-right-bold"
              class="ml-auto h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          </component>

          <div class="card-base flex items-center gap-3 border-accent/20 bg-accent/5 p-5">
            <span class="relative flex h-2.5 w-2.5 shrink-0">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
            </span>
            <p class="text-sm text-body">
              Currently <span class="font-semibold text-accent">available</span> for
              freelance projects and full-time roles.
            </p>
          </div>
        </div>

        <!-- Form -->
        <div class="card-base p-7 sm:p-9 lg:col-span-3" v-reveal="150">
          <form class="space-y-5" @submit.prevent="submitForm">
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label for="name" class="mb-2 block text-sm font-medium text-heading">
                  Name
                </label>
                <input
                  id="name"
                  v-model="name"
                  type="text"
                  required
                  placeholder="Your name"
                  class="w-full rounded-xl border border-edge bg-surface/70 px-4 py-3 text-heading placeholder-muted outline-none transition-all duration-300 focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <div>
                <label for="email" class="mb-2 block text-sm font-medium text-heading">
                  Email
                </label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  class="w-full rounded-xl border border-edge bg-surface/70 px-4 py-3 text-heading placeholder-muted outline-none transition-all duration-300 focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                />
              </div>
            </div>

            <div>
              <label for="subject" class="mb-2 block text-sm font-medium text-heading">
                Subject
              </label>
              <input
                id="subject"
                v-model="subject"
                type="text"
                placeholder="What is this about?"
                class="w-full rounded-xl border border-edge bg-surface/70 px-4 py-3 text-heading placeholder-muted outline-none transition-all duration-300 focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div>
              <label for="message" class="mb-2 block text-sm font-medium text-heading">
                Message
              </label>
              <textarea
                id="message"
                v-model="message"
                rows="5"
                required
                placeholder="Tell me about your project..."
                class="w-full resize-none rounded-xl border border-edge bg-surface/70 px-4 py-3 text-heading placeholder-muted outline-none transition-all duration-300 focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn-primary w-full"
              :class="{ 'pointer-events-none opacity-70': status === 'sending' }"
            >
              <Icon
                :icon="
                  status === 'sent'
                    ? 'ph:check-circle-bold'
                    : status === 'sending'
                      ? 'ph:circle-notch-bold'
                      : 'ph:paper-plane-tilt-bold'
                "
                class="h-5 w-5"
                :class="{ 'animate-spin': status === 'sending' }"
              />
              {{ buttonLabel }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
