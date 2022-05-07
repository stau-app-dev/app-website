<template>
  <div class="bg-gray-50 grid grid-cols-1 md:grid-cols-2 md:px-16 py-16 gap-16">
    <div class="flex flex-col justify-center px-8 md:px-16 lg:px-20">
      <h1
        class="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl leading-normal mb-2"
      >
        Made with you in mind.
      </h1>
      <p class="text-lg md:text-xl text-gray-600 leading-relaxed mt-2">
        We delicately crafted the app from the ground up, tailoring each and
        every feature to the needs of the students. We're always looking to
        improve, so feel free to send us any feedback or suggestions!
      </p>
    </div>
    <div class="hidden md:flex flex-col justify-center items-center">
      <img
        src="~/assets/img/app_icon_512.png"
        alt="App Icon"
        class="rounded-full border-4 border-primary"
        width="512"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LandingAdditionalInfo',
});
</script>
