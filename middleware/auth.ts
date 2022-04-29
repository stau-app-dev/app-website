import { Middleware } from '@nuxt/types';

const auth: Middleware = ({ store, route, redirect }) => {
  if (route.path !== '/staff/login' && !store.state.userData) {
    return redirect('/staff/login');
  } else if (route.path === '/staff/login' && store.state.userData) {
    return redirect('/staff/menu');
  }
};

export default auth;
