<template>
  <div>
    <div
      class="select-none flex items-center justify-between bg-red-50 pl-3 pr-2 py-3 w-full rounded text-primary font-bold cursor-pointer hover:opacity-75 gap-2"
      @click="q.isOpen = !q.isOpen"
    >
      {{ q.question }}
      <span class="h-6 w-6 flex items-center justify-center text-gray-600">
        <svg
          v-if="!q.isOpen"
          class="w-3 h-3 fill-current"
          viewBox="0 0 469.33333 469.33333"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"
          />
        </svg>

        <svg
          v-else
          class="w-3 h-3 fill-current"
          viewBox="0 -192 469.33333 469"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"
          />
        </svg>
      </span>
    </div>
    <div
      class="p-3 bg-gray-50"
      :class="{
        block: q.isOpen,
        hidden: !q.isOpen,
      }"
    >
      <p
        v-for="(paragraph, index) in q.answer.split('\n')"
        :key="`paragraph-${index}`"
        class="text-gray-600 mb-3"
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FaqQuestion',
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      q: { ...this.question },
    };
  },
});
</script>
