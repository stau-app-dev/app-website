<template>
  <div>
    <div class="min-h-screen flex flex-col">
      <SharedNavbar class="w-full fixed top-0" />
      <TutorialList class="pt-36" :tutorials="tutorials" />
    </div>
    <SharedFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Tutorial from '@/types/tutorial';

export default Vue.extend({
  name: 'TutorialsPage',
  data() {
    return {
      tutorials: [
        {
          title: 'How to Write Lorem Ipsum',
          steps: [
            'Anim esse minim in tempor nostrud dolore tempor sunt officia proident fugiat aliqua. Adipisicing sit sit quis exercitation aliquip velit nulla eu adipisicing laborum dolore cupidatat velit ea.',
            'Amet commodo sit dolor sit pariatur reprehenderit Lorem et labore et occaecat ex enim. Enim sunt laboris cupidatat ipsum duis occaecat non dolore deserunt. Est enim ex non sint aliqua tempor ea laboris elit anim reprehenderit pariatur pariatur.',
            'Voluptate elit commodo dolore quis eiusmod velit nostrud ut. Ipsum cupidatat exercitation magna sunt culpa amet in laboris enim duis minim amet magna qui. Commodo eu do esse duis ad consequat officia pariatur fugiat. Aute magna sit ullamco in commodo aliquip labore laboris non sit Lorem occaecat ad sunt. Nulla aliqua adipisicing nostrud sint minim aliquip velit occaecat irure voluptate officia ipsum eiusmod reprehenderit. Nisi pariatur sit minim et dolor veniam nisi ad occaecat cupidatat deserunt. Commodo veniam pariatur laborum ipsum. Eiusmod aute Lorem tempor culpa consequat non sunt duis amet voluptate aliquip. Nisi pariatur do quis esse labore sit elit. Veniam anim minim do aliquip esse. Ipsum ad deserunt tempor Lorem consequat ut sunt qui. In occaecat laborum commodo eu eiusmod adipisicing excepteur incididunt nisi cillum ad labore sint.',
          ],
          images: [
            'https://via.placeholder.com/300x600',
            'https://via.placeholder.com/300x600',
          ],
        },
        {
          title: 'Why Lorem Ipsum is the Superior Language',
          steps: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          ],
          images: [
            'https://via.placeholder.com/300x600',
            'https://via.placeholder.com/300x600',
            'https://via.placeholder.com/300x600',
            'https://via.placeholder.com/300x600',
          ],
        },
        {
          title: 'Lorem Ipsum in the Real World',
          steps: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          ],
        },
      ] as Tutorial[],
    };
  },
});
</script>
