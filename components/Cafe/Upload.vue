<template>
  <div class="rounded-lg border-gray-200 border-4 p-8 sm:p-16 bg-gray-100">
    <h3 class="text-3xl text-primary font-bold">Image Upload</h3>
    <div class="flex flex-col gap-4 md:w-1/2 py-4">
      <input
        v-model="name"
        type="text"
        placeholder="File Name"
        class="rounded-lg border-gray-300"
      />
      <input ref="file" type="file" @change="onFileChange" />
      <button
        class="py-2 px-4 border border-primary rounded-lg text-base text-primary font-medium hover:bg-primary hover:text-white transition"
        @click="upload"
      >
        Upload
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'CafeUpload',
  data() {
    return {
      file: null as unknown as File,
      name: null as string | null,
      ext: null as string | null,
    };
  },
  methods: {
    onFileChange(e: Event) {
      const file = (e.target as HTMLInputElement).files![0];
      if (!file) {
        return;
      }
      this.file = file;
      this.ext = file.name.split('.').pop()!;
      // don't overwrite existing name
      if (!this.name) {
        this.name = file.name.split('.').slice(0, -1).join('.'); // remove extension as it is added later
      }
    },
    async upload() {
      await this.$fire.storage
        .ref(`newCafeMenuItems/${this.name}.${this.ext}`)
        .put(this.file);
      this.$nuxt.refresh();
    },
  },
});
</script>
