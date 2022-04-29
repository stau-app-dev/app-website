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
      <VueCropper
        v-show="file"
        ref="cropper"
        :src="file"
        :aspect-ratio="1 / 0.83"
        :initial-aspect-ratio="1 / 0.83"
      />
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
import VueCropper, { VueCropperMethods } from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
export default Vue.extend({
  name: 'CafeUpload',
  components: {
    VueCropper,
  },
  data() {
    return {
      file: null as FileReader['result'],
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
      this.ext = file.name.split('.').pop()!;
      // don't overwrite existing name
      if (!this.name) {
        this.name = file.name.split('.').slice(0, -1).join('.'); // remove extension as it is added later
      }

      if (typeof FileReader !== 'undefined') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.file = event.target!.result;
          (this.$refs.cropper! as VueCropperMethods & Vue).replace(
            this.file!.toString()
          );
        };
        reader.readAsDataURL(file);
      }
    },
    upload() {
      (this.$refs.cropper! as VueCropperMethods & Vue)
        .getCroppedCanvas()
        .toBlob(async (blob) => {
          await this.$fire.storage
            .ref(`newCafeMenuItems/${this.name}.${this.ext}`)
            .put(blob!);
          this.$nuxt.refresh();
        });
    },
  },
});
</script>
