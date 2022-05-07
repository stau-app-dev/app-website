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
            'To opt into general annoucnements, please click the settings icon in the "my profile" section.',
            'Next, please toggle the "Enable General Notifications".',
            'Once the notification toggle has been selected you will be brought back to the main menu and a notification banner will appear at the bottom of the screen to indicate that the change has been made.',
          ],
          images: [
            'general_annc_1.png',
            'general_annc_2.png',
            'general_annc_3.png',
          ],
        },
        {
          title: 'How to change profile picture',
          steps: [
            'To change your profile picture please click your current profile picture in the "my profile" section.',
            'Once the profile picture selection panel pops up, feel free to select any profile picture you desire. A yellow outline will appear around the profile picture you have selected. Once you have selected a picture you like please press the "save" button at the bottom of the selection panel.',
            'After a few seconds after pressing save, you will be brought back to the main menu, and a green notification bar at the bottom of the screen will appear saying "Updated user successfully"',
          ],
          images: [
            'change_profile_pic_1.png',
            'change_profile_pic_2.png',
            'change_profile_pic_3.png',
          ],
        },
        {
          title: 'How to navigate socials screen',
          steps: [
            'Click "Join a Club" to join clubs/councils/committees you are a part of.',
            'You may browse available clubs/councils/committees. To return to the main socials screen, click the socials icon tab again.',
            'Clubs will have one of the three join permissions \n1. Join (open for anyone to join) \n2. Request Join (must wait to be accepted) \n3. Not Open to Join (talk to your teacher supervisor if you think this is incorrect).',
            'Confirm your request to join a club by clicking the confirm button.',
            'You will see your status change to "Pending" in the club you joined.',
          ],
          images: [
            'nav_socials_1.png',
            'nav_socials_2.png',
            'nav_socials_3.png',
            'nav_socials_4.png',
            'nav_socials_5.png',
          ],
        },
        {
          title: 'How to create clubs',
          steps: [
            'To create a club, please click the "create a club" button in the "socials" section.',
            'A pop up will appear for all details of the club.',
            'Please fill in all the fields. Once done please click "Create Club".',
            'Once you click save, a popup banner will appear at the bottom of your screen, indicating that the club has been created. Your club will then appear in the social tab.',
          ],
          images: [
            'create_clubs_1.png',
            'create_clubs_2.png',
            'create_clubs_3.png',
            'create_clubs_4.png',
          ],
        },
        {
          title: 'How to delete announcements',
          steps: [
            'To delete an announcement please click the socials tab and select the club with the announcement you wish to delete.',
            "Once you are in your club's page, please press and hold the announcement you wish to delete.",
            'A popup will appear, please click the "delete" button to remove the announcement.',
          ],
          images: [
            'delete_annc_1.png',
            'delete_annc_2.png',
            'delete_annc_3.png',
          ],
        },
        {
          title: 'How to add a song',
          steps: [
            'To make a morning announcement song request please go to the "song requests" section and click the "add song" button.',
            'A pop up will appear, please fill in all the fields.',
            'Once completed, please press "submit" (Ensure that the song you requested is school appropriate!).',
            'Once the request has been made, please wait for a refresh, and your song request will appear!',
          ],
          images: [
            'add_song_1.png',
            'add_song_2.png',
            'add_song_3.png',
            'add_song_4.png',
          ],
        },
        {
          title: 'How to delete a song',
          steps: [
            'To delete a song, please go to the "song request" section and long press the song that you wish to delete.',
            'Once the long press has occurred, a pop up will appear. Then please click "delete song". The song will then be deleted.',
          ],
          images: ['delete_song_1.png', 'delete_song_2.png'],
        },
      ] as Tutorial[],
    };
  },
});
</script>
