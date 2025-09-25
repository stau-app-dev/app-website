<template>
  <div class="px-8 md:px-16 lg:px-32 pt-16 pb-24">
    <div class="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-y-12 gap-x-12">
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
