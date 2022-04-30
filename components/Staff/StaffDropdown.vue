<template>
  <div
    v-on-clickaway="closeMenu"
    class="relative inline-block text-left text-gray-800"
  >
    <div>
      <span class="rounded-md shadow-sm">
        <button
          id="options-menu"
          type="button"
          class="inline-flex items-center justify-between w-full rounded-md border border-gray-300 h-10 px-4 py-4 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800 transition ease-in-out duration-150 btn-focus"
          aria-haspopup="true"
          aria-expanded="true"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span> Staff </span>
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </span>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isMenuOpen"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg text-sm overflow-hidden border z-20"
      >
        <div
          class="rounded-md bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div>
            <div class="p-4 flex items-center">
              <div class="w-full">
                <p class="font-semibold text-base">{{ userName }}</p>
                <p class="text-gray-600">{{ email }}</p>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-100"></div>
          <div class="py-1">
            <NuxtLink to="/staff/menu" class="p-4 flex items-center space-x-2">
              <span> Cafe Menu </span>
            </NuxtLink>
            <NuxtLink
              to="/staff/announcement"
              class="p-4 flex items-center space-x-2"
            >
              <span> Staff Announcement </span>
            </NuxtLink>
          </div>
          <div class="border-t border-gray-100"></div>
          <div class="py-1">
            <a
              class="p-4 flex items-center space-x-2 cursor-pointer"
              @click="logout"
            >
              <span> Logout </span>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'StaffDropdown',
  props: {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    closeMenu() {
      this.isMenuOpen = false;
    },
    logout() {
      this.isMenuOpen = false;
      this.$store.dispatch('logout');
    },
  },
});
</script>
