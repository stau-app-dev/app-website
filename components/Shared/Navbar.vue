<template>
  <nav
    class="flex items-center gap-y-4 justify-center sm:justify-between flex-wrap py-6 px-2 sm:px-8 lg:px-16 shadow-md bg-white z-50"
  >
    <div class="flex items-center flex-shrink-0 text-black font-bold mr-6">
      <img
        src="~/assets/img/logo.jpg"
        alt="App Logo"
        class="h-8 w-8 mr-3 rounded-full"
      />
      <span class="font-semibold text-xl tracking-tight"
        ><NuxtLink to="/">St. Augustine CHS App</NuxtLink></span
      >
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-primary border-primary hover:bg-primary hover:text-white hover:border-white transition-colors duration-150"
        @click="isOpen = !isOpen"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="w-full flex-grow lg:flex lg:items-center lg:w-auto"
      :class="{ block: isOpen, hidden: !isOpen }"
    >
      <div class="text-base lg:flex-grow lg:text-right lg:mr-3">
        <NuxtLink
          to="/tutorials"
          class="text-center block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-primary lg:mr-4"
        >
          Tutorials
        </NuxtLink>
        <NuxtLink
          to="/faq"
          class="text-center block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-primary lg:mr-4"
        >
          FAQ
        </NuxtLink>
        <NuxtLink
          to="/team"
          class="text-center block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-primary lg:mr-4"
        >
          Team
        </NuxtLink>
        <NuxtLink
          to="/privacy"
          class="text-center block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-primary lg:mr-4"
          :class="{ 'pb-4': $store.state.userData }"
        >
          Privacy
        </NuxtLink>
        <NuxtLink
          v-if="!$store.state.userData"
          to="/staff/login"
          class="text-center block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-primary lg:mr-4"
          :class="{ 'pb-4': $store.state.userData }"
        >
          Login
        </NuxtLink>
        <div
          v-if="$store.state.userData"
          :class="{ block: isOpen, hidden: !isOpen }"
        >
          <div class="border-t border-gray-100"></div>
          <NuxtLink
            to="/staff/menu"
            class="text-center block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-primary lg:mr-4"
          >
            Cafe Menu
          </NuxtLink>
          <NuxtLink
            to="/staff/announcement"
            class="text-center block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-primary lg:mr-4"
          >
            Staff Announcement
          </NuxtLink>
          <a
            class="text-center block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-primary lg:mr-4"
            @click="logout"
          >
            Logout
          </a>
        </div>
        <StaffDropdown
          v-if="$store.state.userData"
          :user-name="$store.state.userData.name"
          :email="$store.state.userData.email"
          :class="{ block: !isOpen, hidden: isOpen }"
        />
      </div>
      <div class="lg:ml-3 text-center">
        <button
          class="text-center font-semibold inline-block text-sm px-5 py-2.5 leading-none border rounded-2xl bg-primary text-white hover:opacity-75 transition-opacity duration-150 mt-4 lg:mt-0"
          @click="downloadApp()"
        >
          Download
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'SharedNavbar',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    platform() {
      // https://stackoverflow.com/a/21742107
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/windows phone/i.test(userAgent)) {
        return 'Windows Phone';
      }
      if (/android/i.test(userAgent)) {
        return 'Android';
      }
      if (
        (/iPad|iPhone|iPod|iPad/.test(userAgent) && !window.MSStream) ||
        // iPad OS 13+
        (/Macintosh/.test(userAgent) && navigator.maxTouchPoints > 1)
      ) {
        return 'iOS';
      }
      return 'unknown';
    },
    downloadApp() {
      if (this.platform() === 'Android') {
        window.open('https://play.google.com'); // TODO: replace with actual link
      } else if (this.platform() === 'iOS') {
        window.open('https://apps.apple.com'); // TODO: replace with actual link
      } else {
        this.$router.push('/');
      }
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
