<template>
  <div class="px-4 md:px-16 lg:px-20 py-16">
    <h1 class="font-serif text-4xl md:text-5xl font-bold text-center">
      Tutorial <span class="text-primary">List</span>
    </h1>
    <div class="flex justify-center">
      <hr class="border-b-4 border-solid w-8/12 my-12 border-primary" />
    </div>
    <TutorialCard
      v-for="(tutorial, index) in tutorials"
      :key="`tutorial-${index}`"
      :tutorial="tutorial"
      class="mb-6"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Tutorial from '@/types/tutorial';
export default Vue.extend({
  name: 'TutorialList',
  props: {
    tutorials: {
      type: Array as PropType<Tutorial[]>,
      required: true,
    },
  },
});
</script>
