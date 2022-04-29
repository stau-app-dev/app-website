import { MutationTree, ActionTree } from 'vuex';
import { AuthUser, User } from '@/types/user';

export const state = () => ({
  user: null as AuthUser | null,
  userData: null as User | null,
  errors: [] as string[],
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  onAuthStateChangedMutation(state, { authUser }) {
    if (!authUser) {
      state.user = null;
    } else {
      const { uid, email } = authUser;
      state.user = { uid, email };
    }
  },

  clearUserData(state) {
    state.userData = null;
  },

  setUserData(state, payload) {
    state.userData = payload;
  },

  clearErrors(state) {
    state.errors = [];
  },

  addError(state, payload) {
    state.errors.push(payload);
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async onAuthStateChangedAction({ commit }, { authUser }) {
    if (!authUser) {
      commit('clearUserData');
    } else {
      try {
        const userData = await this.$axios
          .get('/getUser', {
            params: {
              id: authUser.uid,
              email: authUser.email,
              name: 'User',
            },
          })
          .then((res) => res.data.data.user);
        if (userData && userData.status >= 1) {
          commit('setUserData', userData);
          this.$router.push('/staff/dashboard');
        } else {
          commit('addError', 'Must be a staff member to login');
          this.$fire.auth.signOut();
        }
      } catch (e: any) {
        commit('addError', e.message);
      }
    }
  },
  async logout({ commit }) {
    await this.$fire.auth.signOut();
    commit('clearUserData');
    this.$router.push('/staff/login');
  },
};
