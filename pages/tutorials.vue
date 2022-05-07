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
          title: 'How to opt in to general announcements',
          steps: [
            'To opt into general annoucnements, please click the settings icon in the “my profile” section.',
            'Next, please toggle the “Enable General Notifications”.',
            'Once the notification toggle has been selected you will be brought back to the main menu and a notification banner will appear at the bottom of the screen to indicate that the change has been made.',
          ],
          images: [
            'general_annc_1.png',
            'general_annc_2.png',
            'general_annc_3.png',
          ],
        },
        {
          title: 'Why Lorem Ipsum is the Superior Language',
          steps: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          ],
          images: [],
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
