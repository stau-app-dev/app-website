<template>
  <div class="px-4 md:px-16 lg:px-20 py-16">
    <h1 class="font-serif text-4xl md:text-5xl font-bold text-center">
      Our <span class="text-primary">Team</span>
    </h1>
    <div class="flex justify-center">
      <hr class="border-b-4 border-solid w-8/12 my-12 border-primary" />
    </div>
    <TeamCard
      v-for="(group, index) in teams"
      :key="`group-${index}`"
      :group="group"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Team from '@/types/team';
export default Vue.extend({
  name: 'TeamGrid',
  props: {
    teams: {
      type: Array as PropType<Team[]>,
      required: true,
    },
  },
});
</script>
