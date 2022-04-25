<template>
  <div>
    <div class="min-h-screen flex flex-col">
      <SharedNavbar class="w-full fixed top-0" />
      <FaqQuestions class="pt-36" :questions="questions" />
    </div>
    <SharedFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Question from '@/types/question';

export default Vue.extend({
  name: 'FaqPage',
  data() {
    return {
      questions: [
        {
          isOpen: true,
          question: 'How do I enable general announcements?',
          answer:
            'You can enable general announcements by clicking the "Enable General Notifications" switch in the settings page.',
        },
        {
          isOpen: false,
          question:
            'Is there a place in the app or somewhere we can put suggestions and report bugs?',
          answer:
            'Yes! In the settings screen, which can be found in the profile page.',
        },
        {
          isOpen: false,
          question:
            'Will the caf menu be updated the night before or the morning of?',
          answer:
            "The caf menu will be updated on the app the morning of as this is when the cafeteria posts that day's menu",
        },
        {
          isOpen: false,
          question:
            'What is the difference between club announcements and general announcements?',
          answer:
            'Club announcements are for announcements that are specific to a club. General announcements are school wide announcements.',
        },
        {
          isOpen: false,
          question: 'Can I log into my account on multiple devices?',
          answer:
            'Yes! You can log into your account on multiple devices. However, the notifications will only appear on the last signed in device.',
        },
      ] as Array<Question>,
    };
  },
});
</script>
