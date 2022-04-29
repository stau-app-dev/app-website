<template>
  <div>
    <div class="min-h-screen flex flex-col">
      <SharedNavbar class="w-full fixed top-0" />
      <div class="pt-36">
        <div class="px-4 md:px-16 lg:px-20 py-16 h-full">
          <h1 class="font-serif text-4xl md:text-5xl font-bold text-center">
            Cafeteria <span class="text-primary">Menu</span>
          </h1>
          <div class="flex justify-center">
            <hr class="border-b-4 border-solid w-8/12 my-12 border-primary" />
          </div>
          <div class="space-y-4">
            <CafeMenu
              :daily="true"
              :items="dailyItems"
              :picture-ids="pictureIds"
            />
            <CafeMenu
              :daily="false"
              :items="regularItems"
              :picture-ids="pictureIds"
            />
            <CafeUpload />
          </div>
        </div>
      </div>
    </div>
    <SharedFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CafeItem from '@/types/cafeitem';

export default Vue.extend({
  name: 'CafeteriaMenuPage',
  middleware: 'auth',
  async asyncData({ $axios }) {
    const dailyItems = (await $axios
      .get('/getCafeMenuItems', {
        params: {
          isTodaysSpecial: 'true',
          limit: -1,
        },
      })
      .then((response) => response.data.data)) as CafeItem[];
    const regularItems = (await $axios
      .get('/getCafeMenuItems', {
        params: {
          isTodaysSpecial: 'false',
          limit: -1,
        },
      })
      .then((response) => response.data.data)) as CafeItem[];
    const pictureIds = (await $axios
      .get('/getCafeMenuPictures', {
        params: {
          limit: -1,
        },
      })
      .then((response) => response.data.data)) as string[];
    return {
      dailyItems,
      regularItems,
      pictureIds,
    };
  },
});
</script>
