<template>
  <div>
    <div class="min-h-screen flex flex-col">
      <SharedNavbar class="w-full fixed top-0" />
      <TeamGrid class="pt-36" :teams="teams" />
    </div>
    <SharedFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Team from '@/types/team';

export default Vue.extend({
  name: 'TeamPage',
  data() {
    return {
      teams: [
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
      ] as Array<Team>,
    };
  },
});
</script>
