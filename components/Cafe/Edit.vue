<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center"
  >
    <div
      class="shadow-lg rounded-lg bg-white p-12 flex flex-col gap-4 border-gray-100 border-2"
    >
      <h3 class="font-semibold text-xl mb-2">Edit {{ item.name }}</h3>
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
        <option
          v-for="picture in pictureIds"
          :key="picture"
          :value="picture"
          :selected="picture == item.pictureId"
        >
          {{ picture }}
        </option>
      </select>
      <div class="flex justify-center">
        <button
          class="py-2 px-4 mr-2 border border-yellow-600 rounded-lg text-base text-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition"
          @click="edit"
        >
          Save
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
import Vue, { PropType } from 'vue';
import CafeItem from '@/types/cafeitem';
export default Vue.extend({
  name: 'CafeEdit',
  props: {
    item: {
      type: Object as PropType<CafeItem>,
      required: true,
    },
    pictureIds: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      name: '',
      price: 0,
      pictureId: '',
      isTodaysSpecial: 'false',
    };
  },
  mounted() {
    this.name = this.item.name;
    this.price = this.item.price;
    this.pictureId = this.item.pictureId;
    this.isTodaysSpecial = this.item.isTodaysSpecial.toString();
  },
  methods: {
    async edit() {
      await this.$axios.post('/updateCafeMenuItem', {
        id: this.item.id,
        name: this.name,
        price: this.price,
        pictureId: this.pictureId,
        isTodaysSpecial: this.isTodaysSpecial,
      });
      this.$nuxt.refresh();
      this.$emit('close');
    },
  },
});
</script>
