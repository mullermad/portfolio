<template>
  <!-- <CHANGE> Changed from light gradient to dark gray-800 background -->
  <div class="min-h-screen bg-gray-800 text-white">
    <!-- Header Section -->
    <!-- <CHANGE> Updated header to work with dark theme -->
    <div class="relative overflow-hidden bg-gray-900 shadow-sm">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <!-- <CHANGE> Changed text color to white -->
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Me</span>
          </h1>
          <!-- <CHANGE> Changed text color to gray-300 for better contrast -->
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <!-- <CHANGE> Changed text color to white -->
            <h2 class="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <!-- <CHANGE> Changed text color to gray-300 -->
            <p class="text-lg text-gray-300 mb-8">
              Ready to start a conversation? I'm here to help and would love to hear from you.
            </p>
          </div>

          <div class="space-y-6">
            <!-- Phone -->
            <!-- <CHANGE> Updated card background to gray-700 for dark theme -->
            <div class="flex items-center p-6 bg-gray-700 rounded-xl shadow-sm border border-gray-600 hover:shadow-md transition-shadow">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <!-- <CHANGE> Changed text color to white -->
                <h3 class="text-lg font-semibold text-white">Phone</h3>
                <a href="tel:+251943438385" class="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  +251 943 438 385
                </a>
              </div>
            </div>

            <!-- Email -->
            <!-- <CHANGE> Updated card background to gray-700 for dark theme -->
            <div class="flex items-center p-6 bg-gray-700 rounded-xl shadow-sm border border-gray-600 hover:shadow-md transition-shadow">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <!-- <CHANGE> Changed text color to white -->
                <h3 class="text-lg font-semibold text-white">Email</h3>
                <a href="mailto:mulukendemis44@gmail.com" class="text-teal-400 hover:text-teal-300 font-medium transition-colors">
                  mulukendemis44@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <!-- <CHANGE> Updated form background to gray-700 for dark theme -->
        <div class="bg-gray-700 rounded-2xl shadow-lg border border-gray-600 p-8">
          <!-- <CHANGE> Changed text color to white -->
          <h3 class="text-2xl font-bold text-white mb-6">Send a Message</h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <!-- <CHANGE> Changed label text color to gray-300 -->
                <label for="firstName" class="block text-sm font-medium text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  v-model="firstName"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-500 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <!-- <CHANGE> Changed label text color to gray-300 -->
                <label for="lastName" class="block text-sm font-medium text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  v-model="lastName"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-500 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <!-- <CHANGE> Changed label text color to gray-300 -->
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                v-model="email"
                type="email"
                class="w-full px-4 py-3 border border-gray-500 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <!-- <CHANGE> Changed label text color to gray-300 -->
              <label for="phone" class="block text-sm font-medium text-gray-300 mb-2">
                Phone (Optional)
              </label>
              <input
                id="phone"
                v-model="phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-500 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <!-- <CHANGE> Changed label text color to gray-300 -->
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                v-model="content"
                rows="5"
                class="w-full px-4 py-3 border border-gray-500 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none placeholder-gray-400"
                placeholder="Tell me about your project or how I can help you..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-teal-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const email = ref('')
const content = ref('')

const submitForm = () => {
  // Handle form submission here
  console.log('Form submitted:', {
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    email: email.value,
    content: content.value
  })
  
  // You can add your form submission logic here
  alert('Thank you for your message! I\'ll get back to you soon.')
  
  // Reset form
  firstName.value = ''
  lastName.value = ''
  phone.value = ''
  email.value = ''
  content.value = ''
}
</script>
