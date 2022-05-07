<template>
  <div class="bg-gray-50 p-8 rounded-lg leading-relaxed">
    <h3 class="text-xl md:text-2xl font-semibold mb-3">
      {{ tutorial.title }}
    </h3>
    <ul class="list-decimal list-inside space-y-1">
      <li v-for="(step, index) in tutorial.steps" :key="`step-${index}`">
        {{ step }}
      </li>
    </ul>
    <div v-if="tutorial.images" class="flex flex-wrap items-center">
      <div
        v-for="(image, index) in tutorial.images"
        :key="`image-${index}`"
        class="m-4 flex justify-center"
      >
        <img
          :src="require(`~/assets/img/tutorials/${image}`)"
          :alt="tutorial.title + ' image ' + index"
          class="rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Tutorial from '@/types/tutorial';
export default Vue.extend({
  name: 'TutorialCard',
  props: {
    tutorial: {
      type: Object as PropType<Tutorial>,
      required: true,
    },
  },
});
</script>
