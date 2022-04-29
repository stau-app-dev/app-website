<template>
  <div class="rounded-lg border-gray-200 border-4 p-8 sm:p-16 bg-gray-100">
    <h3 class="text-3xl text-primary font-bold">
      {{ daily ? 'Daily Menu' : 'Regular Menu' }}
    </h3>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 auto-rows-fr container py-4"
    >
      <div
        v-for="(item, index) in items"
        :key="`item-${index}`"
        class="w-full p-4"
      >
        <div class="bg-white rounded-lg overflow-hidden">
          <div
            :style="{
              backgroundImage: `url(${item.pictureUrl})`,
            }"
            class="h-56 w-full bg-cover bg-center"
          ></div>
          <div class="p-6 text-center">
            <h3 class="font-semibold text-xl mb-2">
              {{ item.name }}
            </h3>
            <p class="text-base text-gray-600 leading-relaxed mb-4">
              ${{
                item.price.toLocaleString('en-CA', {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })
              }}
            </p>
            <div class="flex justify-center">
              <button
                class="py-2 px-4 mr-2 border border-yellow-600 rounded-lg text-base text-yellow-600 font-medium hover:bg-yellow-600 hover:text-white transition"
                @click="openEditModal = index"
              >
                Edit
              </button>
              <button
                class="py-2 px-4 ml-2 border border-primary rounded-lg text-base text-primary font-medium hover:bg-primary hover:text-white transition"
                @click="deleteItem(item.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <CafeEdit
          v-if="openEditModal == index"
          :item="item"
          :picture-ids="pictureIds"
          @close="openEditModal = -1"
        />
      </div>
      <div class="w-full p-4">
        <div
          class="text-primary bg-gray-50 rounded-lg overflow-hidden mb-10 border-2 border-dotted border-primary h-full flex flex-col justify-center items-center gap-4 cursor-pointer hover:bg-gray-100"
          @click="openAddModal = true"
        >
          <p class="text-6xl">+</p>
          <h3 class="text-3xl">Add Item</h3>
        </div>
        <CafeAdd
          v-if="openAddModal"
          :is-todays-special="daily"
          :picture-ids="pictureIds"
          @close="openAddModal = false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import CafeItem from '@/types/cafeitem';
export default Vue.extend({
  name: 'CafeMenu',
  props: {
    daily: {
      type: Boolean,
      required: true,
    },
    items: {
      type: Array as PropType<CafeItem[]>,
      required: true,
    },
    pictureIds: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openEditModal: -1,
      openAddModal: false,
    };
  },
  methods: {
    async deleteItem(id: string) {
      await this.$axios.post('/deleteCafeMenuItem', { id });
      this.$nuxt.refresh();
    },
  },
});
</script>
