<template>
  <div>
    <LandingNavbar @scroll-to="scrollTo($event)" />
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
      const el = this.$refs[ref] as HTMLElement;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
});
</script>
