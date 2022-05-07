<template>
  <div class="bg-gray-50 grid grid-cols-1 md:grid-cols-2 md:px-16 py-16 gap-16">
    <div class="flex flex-col justify-center px-8 md:px-16 lg:px-20">
      <h1
        class="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl leading-normal mb-2"
      >
        Reimagined from the ground up.
      </h1>
      <p class="text-lg md:text-xl text-gray-600 leading-relaxed mt-2">
        Introducing the St. Augustine CHS mobile app, fully redesigned and
        reimagined, giving you the user experience you deserve.
      </p>
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
    <div class="flex flex-col justify-center items-center">
      <div
        class="rounded-full bg-primary w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex justify-center items-center"
      >
        <img
          src="~/assets/img/iphone-mockup.png"
          alt="iPhone Mockup"
          class="-mt-8 transform scale-75"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LandingHero',
});
</script>
