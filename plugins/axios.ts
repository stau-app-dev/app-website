import { Plugin } from '@nuxt/types';

const axios: Plugin = ({ $axios, redirect, $fire }) => {
  $axios.onRequest((config) => {
    const currentUser = $fire.auth.currentUser;
    if (!currentUser) {
      redirect('/login');
      return;
    }
    currentUser!.getIdToken().then((idToken) => {
      config.headers.Authorization = `Bearer ${idToken}`;
    });
  });
};

export default axios;
