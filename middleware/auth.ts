import { Middleware } from '@nuxt/types';

const auth: Middleware = ({ store, route, redirect }) => {
  if (route.path !== '/login' && !store.state.userData) {
    return redirect('/login');
  } else if (route.path === '/login' && store.state.userData) {
    return redirect('/');
  }
};

export default auth;
