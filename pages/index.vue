<template>
  <div>
    <div class="min-h-screen flex flex-col">
      <LandingNavbar class="w-full fixed top-0" />
      <LandingHero class="flex-1 pt-36" />
    </div>
    <LandingQuote />
    <LandingFeatures />
    <LandingAdditionalInfo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
});
</script>
