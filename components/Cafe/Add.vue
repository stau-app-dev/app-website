<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center"
  >
    <div
      class="shadow-lg rounded-lg bg-white p-12 flex flex-col gap-4 border-gray-100 border-2"
    >
      <h3 class="font-semibold text-xl mb-2">Add {{ name }}</h3>
      <input
        v-model="name"
        type="text"
        placeholder="Name"
        class="rounded-lg border-gray-300"
      />
      <input
        v-model="price"
        type="number"
        placeholder="Price"
        class="rounded-lg border-gray-300"
      />
      <select v-model="pictureId" class="rounded-lg border-gray-300">
        <option v-for="picture in pictureIds" :key="picture" :value="picture">
          {{ picture }}
        </option>
      </select>
      <div class="flex justify-center">
        <button
          class="py-2 px-4 mr-2 border border-yellow-600 rounded-lg text-base text-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition"
          @click="add"
        >
          Add
        </button>
        <button
          class="py-2 px-4 ml-2 border border-primary rounded-lg text-base text-primary font-medium hover:bg-primary hover:text-white transition"
          @click="$emit('close')"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'CafeAdd',
  props: {
    isTodaysSpecial: {
      type: Boolean,
      required: true,
    },
    pictureIds: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      name: null,
      price: null,
      pictureId: null,
    };
  },
  methods: {
    async add() {
      await this.$axios.post('/addCafeMenuItem', {
        name: this.name,
        price: this.price,
        pictureId: this.pictureId,
        isTodaysSpecial: this.isTodaysSpecial.toString(),
      });
      this.$nuxt.refresh();
      this.$emit('close');
    },
  },
});
</script>
