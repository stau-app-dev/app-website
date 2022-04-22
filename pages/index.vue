<template>
  <div>
    <div class="min-h-screen flex flex-col">
      <LandingNavbar
        ref="nav"
        class="w-full fixed top-0"
        @scroll-to="scrollTo($event)"
      />
      <LandingHero ref="hero" class="flex-1 pt-36" />
    </div>
    <LandingQuote ref="quote" />
    <LandingFeatures ref="features" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  mounted() {
    // Auto scroll to anchor if there is one
    const hash = window.location.hash;
    if (hash) {
      this.scrollTo(hash.substr(1));
    }
  },
  methods: {
    scrollTo(ref: string) {
      const el = (this.$refs[ref] as Vue).$el;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
});
</script>
