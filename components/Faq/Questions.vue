<template>
  <div class="px-4 md:px-16 lg:px-20 py-16">
    <h1 class="font-serif text-4xl md:text-5xl font-bold text-center">
      Frequently <span class="text-primary">Asked</span> Questions
    </h1>
    <div class="flex justify-center">
      <hr class="border-b-4 border-solid w-8/12 my-12 border-primary" />
    </div>
    <FaqQuestion
      v-for="(question, index) in questions"
      :key="`question-${index}`"
      class="mb-4"
      :question="question"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Question from '@/types/question';
export default Vue.extend({
  name: 'FaqQuestions',
  props: {
    questions: {
      type: Array as PropType<Question[]>,
      required: true,
    },
  },
});
</script>
