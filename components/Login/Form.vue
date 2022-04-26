<template>
  <div>
    <form class="flex flex-col space-y-4" @submit.prevent="login">
      <LoginErrors v-if="getErrors.length" :errors="getErrors" />
      <input
        v-model="username"
        class="py-4 px-3 bg-transparent rounded-xl text-gray-400 border-gray-300 shadow-sm focus:text-gray-500 focus:border-gray-700 focus:ring-0 transition-colors duration-150"
        type="text"
        placeholder="Username"
      />
      <input
        v-model="password"
        class="py-4 px-3 bg-transparent rounded-xl text-gray-400 border-gray-300 shadow-sm focus:text-gray-500 focus:border-gray-700 focus:ring-0 transition-colors duration-150"
        type="password"
        placeholder="Password"
      />
      <button
        class="py-4 font-semibold text-white bg-primary hover:opacity-90 rounded-xl transition-opacity duration-150 shadow-2xl"
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
export default Vue.extend({
  name: 'LoginForm',

  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    ...mapState({
      getErrors: 'errors',
    }),
  },
  methods: {
    async login() {
      this.$store.commit('clearErrors');
      if (!this.username || !this.password) {
        this.$store.commit('addError', 'Username and password are required');
        return;
      }
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.username.includes('@')
            ? this.username
            : this.username + '@stachs.com',
          this.password
        );
      } catch (e: any) {
        if (e.code === 'auth/user-not-found') {
          this.$store.commit('addError', 'User not found');
        } else if (e.code === 'auth/wrong-password') {
          this.$store.commit('addError', 'Wrong password');
        } else if (e.code === 'auth/invalid-email') {
          this.$store.commit('addError', 'Invalid email');
        } else {
          this.$store.commit('addError', e.message);
        }
      }
    },
  },
});
</script>
