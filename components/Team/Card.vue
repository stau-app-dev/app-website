<template>
  <div class="text-center bg-gray-50 p-8 rounded-lg mb-16">
    <h3 class="text-3xl font-semibold mb-8 font-serif">{{ group.year }}</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      <div
        v-for="(member, index) in group.members"
        :key="`member-${index}`"
        class="p-8 text-center flex flex-col justify-center gap-y-3"
      >
        <img :src="member.image" :alt="member.name" class="rounded-lg" />
        <h4 class="text-xl font-semibold">{{ member.name }}</h4>
        <p class="text-sm text-gray-600">{{ member.position }}</p>
        <p>{{ member.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Team from '@/types/team';
export default Vue.extend({
  name: 'TeamCard',
  props: {
    group: {
      type: Object as PropType<Team>,
      required: true,
    },
  },
});
</script>
