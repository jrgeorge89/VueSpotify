import { createStore } from 'vuex';
import { fetchUserProfile } from '../services/AuthService';

export default createStore({
  state: {
    accessToken: null,
    user: null,
    favorites: []
  },
  mutations: {
    setToken(state, token) {
      state.accessToken = token;
      localStorage.setItem('access_token', token);
    },
    setUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.accessToken = null;
      state.user = null;
      localStorage.removeItem('access_token');
    },
    addFavorite(state, details) {
      state.favorites.push(details);
      // console.log('Favorites:', state.favorites);
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    async fetchUser({ commit, state }) {
      if (state.accessToken) {
        try {
          const user = await fetchUserProfile(state.accessToken);
          commit('setUser', user);
        } catch (error) {
          console.error('Error al obtener el perfil del usuario:', error);
        }
      }
    },
    logout({ commit }) {
      commit('clearAuthData');
      window.location.href = 'https://accounts.spotify.com/logout';
    }
  },
  getters: {
    accessToken: state => state.accessToken || localStorage.getItem('access_token'),
    user: state => state.user,
    favorites: state => state.favorites
  },
  modules: {
    // Puedes agregar módulos aquí
  }
});
