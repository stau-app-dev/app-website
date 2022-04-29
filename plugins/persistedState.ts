import { Plugin } from '@nuxt/types';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';
import { parse } from 'cookie';

const persistedState: Plugin = ({ store, req }) => {
  createPersistedState({
    storage: {
      getItem: (key) =>
        !req ? Cookies.get(key) : parse(req.headers.cookie || '')[key],
      setItem: (key, value) =>
        Cookies.set(key, value, {
          expires: 365,
          secure: process.env.NODE_ENV === 'production',
        }),
      removeItem: (key) => Cookies.remove(key),
    },
  })(store);
};

export default persistedState;
