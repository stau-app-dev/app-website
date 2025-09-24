<template>
  <div
    class="flex flex-col justify-center items-center py-16 px-4 sm:px-32 lg:px-64 bg-gradient-to-r from-red-700 to-primary"
  >
    <h3 class="text-center text-3xl sm:text-4xl font-bold text-white">
      Get the app now!
    </h3>
    <div class="flex mt-6 items-start">
      <div class="flex flex-col items-center w-full">
        <a href="https://staugustinechs.ca" target="_blank">
          <img
            src="~/assets/img/cta/pwa-badge.png"
            alt="Install the PWA"
            class="h-12"
          />
        </a>
        <p class="text-white text-sm mt-2 text-center">Access the Web App now!</p>

        <div class="flex flex-col items-center mt-6">
          <div class="flex flex-col items-center mb-4">
            <div aria-disabled="true">
              <img
                src="~/assets/img/cta/apple-app-store-badge.svg"
                alt="Apple App Store Badge"
                class="h-12 w-auto max-w-none flex-shrink-0 opacity-70"
              />
            </div>
            <p class="text-white text-sm mt-2 text-center">iOS Coming Soon</p>
          </div>
          <div class="flex flex-col items-center">
            <div aria-disabled="true">
              <img
                src="~/assets/img/cta/google-play-badge.svg"
                alt="Google Play Badge"
                class="h-12 w-auto max-w-none flex-shrink-0 opacity-70"
              />
            </div>
            <p class="text-white text-sm mt-2 text-center">Android Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LandingCTA',
});
</script>
