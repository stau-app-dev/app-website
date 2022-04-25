<template>
  <div
    class="flex flex-col justify-center items-center py-16 px-4 sm:px-32 lg:px-64 bg-gradient-to-r from-red-700 to-primary"
  >
    <h3 class="text-center text-3xl sm:text-4xl font-bold text-white">
      Get the app now!
    </h3>
    <div class="flex mt-6">
      <a href="">
        <img
          src="~/assets/img/cta/google-play-badge.svg"
          alt="Google Play Badge"
          class="h-12 mr-2"
        />
      </a>

      <a href="">
        <img
          src="~/assets/img/cta/apple-app-store-badge.svg"
          alt="Apple App Store Badge"
          class="h-12 ml-2"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LandingCTA',
});
</script>
