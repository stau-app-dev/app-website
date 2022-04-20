<template>
  <nav
    class="flex items-center gap-y-4 justify-center sm:justify-between flex-wrap py-6 px-2 sm:px-8 lg:px-16 shadow-md bg-white"
  >
    <div class="flex items-center flex-shrink-0 text-black font-bold mr-6">
      <img
        src="/img/logo.jpg"
        alt="App Logo"
        class="h-8 w-8 mr-3 rounded-full"
      />
      <span class="font-semibold text-xl tracking-tight"
        >St. Augustine CHS App</span
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
        <a
          href="#features"
          class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-primary mr-4"
          @click="$emit('scroll-to', 'features')"
        >
          Features
        </a>
        <NuxtLink
          to="/team"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-primary mr-4"
        >
          Team
        </NuxtLink>
      </div>
      <div class="lg:ml-3">
        <a
          href="#cta"
          class="cursor-pointer font-semibold inline-block text-sm px-5 py-2.5 leading-none border rounded-2xl bg-primary text-white hover:opacity-75 transition-opacity duration-150 mt-4 lg:mt-0"
          @click="$emit('scroll-to', 'cta')"
          >Download</a
        >
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'LandingNavbar',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
