<script setup>
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const submitted = ref(false)

const submitForm = () => {
  if (firstName.value && email.value && message.value) {
    submitted.value = true
    setTimeout(() => {
      firstName.value = ''
      lastName.value = ''
      email.value = ''
      phone.value = ''
      message.value = ''
      submitted.value = false
    }, 3000)
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center py-16 md:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Get in <span class="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Let's collaborate and create something amazing together.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h2 class="text-3xl font-bold text-white mb-6">Contact Information</h2>
            <p class="text-lg text-gray-400 mb-8">
              Feel free to reach out through any of these channels. I'm always happy to discuss new projects and opportunities.
            </p>
          </div>

          <div class="space-y-6">
            <!-- Email -->
            <a href="mailto:mulukendemis44@gmail.com" class="flex items-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-400/50 hover:bg-gray-800/80 transition-all duration-300 group">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                  <svg class="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-white">Email</h3>
                <p class="text-teal-400 font-medium">mulukendemis44@gmail.com</p>
              </div>
            </a>

            <!-- Phone -->
            <a href="tel:+251943438385" class="flex items-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-400/50 hover:bg-gray-800/80 transition-all duration-300 group">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-white">Phone</h3>
                <p class="text-cyan-400 font-medium">+251 943 438 385</p>
              </div>
            </a>

            <!-- Location -->
            <div class="flex items-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-white">Location</h3>
                <p class="text-blue-400 font-medium">Ethiopia</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-teal-400/30 transition-all duration-300">
          <h3 class="text-2xl font-bold text-white mb-6">Send a Message</h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                <input
                  id="firstName"
                  v-model="firstName"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors placeholder-gray-500"
                  placeholder="Your first name"
                  required
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                <input
                  id="lastName"
                  v-model="lastName"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors placeholder-gray-500"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                id="email"
                v-model="email"
                type="email"
                class="w-full px-4 py-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors placeholder-gray-500"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-300 mb-2">Phone (Optional)</label>
              <input
                id="phone"
                v-model="phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors placeholder-gray-500"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                v-model="message"
                rows="5"
                class="w-full px-4 py-3 border border-gray-600 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none placeholder-gray-500"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-teal-400 hover:to-cyan-400 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-[1.02]"
            >
              {{ submitted ? 'Message Sent! ✓' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
