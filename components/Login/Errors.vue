<template>
  <div>
    <div class="bg-primary text-white font-bold rounded-t px-4 py-2">Error</div>
    <div
      class="border border-t-0 border-red-600 rounded-b bg-red-100 px-4 py-3 text-red-700"
    >
      <ul>
        <li v-for="(error, index) in errors" :key="`error-${index}`">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LoginErrors',
  props: {
    errors: {
      type: Array,
      required: true,
    },
  },
});
</script>
