<template>
  <div class="px-4 md:px-16 lg:px-20 py-16">
    <h1 class="font-serif text-4xl md:text-5xl font-bold text-center">
      Our <span class="text-primary">Team</span>
    </h1>
    <div class="flex justify-center">
      <hr class="border-b-4 border-solid w-8/12 my-12 border-primary" />
    </div>
    <TeamCard
      v-for="(group, index) in team"
      :key="`group-${index}`"
      :group="group"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'TeamGrid',
  data() {
    return {
      team: [
        {
          year: '2021-2022',
          members: [
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
          ],
        },
        {
          year: '2020-2021',
          members: [
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              name: 'John Doe',
              position: 'Cool Position',
              image: 'https://via.placeholder.com/800',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
          ],
        },
      ] as {
        year: string;
        members: {
          name: string;
          position: string;
          image: string;
          bio: string;
        }[];
      }[],
    };
  },
});
</script>
