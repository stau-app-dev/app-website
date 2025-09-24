<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 lg:px-16 pt-16 pb-24 gap-16">
    <div class="hidden lg:flex flex-col justify-center items-center">
      <div
        class="rounded-full bg-primary w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex justify-center items-center"
      >
        <img
          src="~/assets/img/iphone-mockup-2.png"
          alt="iPhone Mockup"
          class="-mt-8 ml-36 transform scale-75"
        />
      </div>
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 px-8 md:px-16 lg:px-20 lg:col-span-2 gap-y-8 lg:pt-12"
    >
      <div class="flex flex-col items-center">
        <img src="~/assets/img/icons/gift.svg" alt="Gift Icon" class="h-16" />
        <h3 class="text-2xl font-bold text-center">Free Forever</h3>
        <p class="text-gray-600 leading-relaxed mt-2 text-center">
          As always, the app is free to download and use.
        </p>
      </div>
      <div class="flex flex-col items-center">
        <img
          src="~/assets/img/icons/verified.svg"
          alt="Verified Icon"
          class="h-16"
        />
        <h3 class="text-2xl font-bold text-center">By the Students</h3>
        <p class="text-gray-600 leading-relaxed mt-2 text-center">
          The St. Augustine CHS app will always be made by and for the students.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LandingFeatures',
});
</script>
