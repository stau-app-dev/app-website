<template>
  <div class="flex flex-col h-screen">
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-4/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
          >
            <div class="flex-auto px-4 lg:px-10 py-10">
              <form ref="login" @submit.prevent="login">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                    >Email</label
                  ><input
                    v-model="email"
                    type="email"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Email"
                    style="transition: all 0.15s ease 0s"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                    >Password</label
                  ><input
                    v-model="password"
                    type="password"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Password"
                    style="transition: all 0.15s ease 0s"
                  />
                </div>
                <div class="text-center mt-6">
                  <button
                    class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="submit"
                    style="transition: all 0.15s ease 0s"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LoginForm',

  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    login(e: Event) {
      e.preventDefault();
      if (this.email === '' || this.password === '') {
        alert('Please fill in all fields');
      } else {
        alert('You are now logged in');
      }
    },
  },
});
</script>
