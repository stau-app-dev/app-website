<template>
  <div>
    <div class="min-h-screen flex flex-col">
      <SharedNavbar class="w-full fixed top-0" />
      <div class="pt-36">
        <div class="px-4 md:px-16 lg:px-20 py-16">
          <h1 class="font-serif text-4xl md:text-5xl font-bold text-center">
            Staff <span class="text-primary">Login</span>
          </h1>
          <div class="flex justify-center">
            <hr class="border-b-4 border-solid w-8/12 my-12 border-primary" />
          </div>
          <div class="flex justify-center">
            <LoginForm class="w-full sm:w-6/12" />
          </div>
        </div>
      </div>
    </div>
    <SharedFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LoginPage',
  middleware: 'auth',
});
</script>
