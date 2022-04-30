<template>
  <div>
    <form class="flex flex-col space-y-4" @submit.prevent="announce">
      <FormErrors v-if="errors.length" :errors="errors" />
      <textarea
        v-model="announcement"
        class="py-4 px-3 bg-transparent rounded-xl text-gray-400 border-gray-300 shadow-sm focus:text-gray-500 focus:border-gray-700 focus:ring-0 transition-colors duration-150"
        placeholder="What would you like to announce?"
        rows="5"
      />
      <button
        class="py-4 font-semibold text-white bg-primary hover:opacity-90 rounded-xl transition-opacity duration-150 shadow-2xl"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FormAnnouncement',

  data() {
    return {
      announcement: '',
      errors: [] as string[],
    };
  },
  methods: {
    async announce() {
      this.errors = [];
      if (!this.announcement) {
        this.errors.push('Announcement cannot be empty');
        return;
      }
      try {
        await this.$axios.post('/sendToGeneralTopic ', {
          message: this.announcement,
        });
        this.announcement = '';
      } catch (e: any) {
        this.errors.push('An error occurred. Please try again later.');
      }
    },
  },
});
</script>
