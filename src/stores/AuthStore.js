import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {},
    token: null,
    errorMessage: null,
  }),
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    getErrorMessage: (state) => state.errorMessage,
  },
  actions: {
    async login() {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/student/login/',
          {
            email: this.email,
            password: this.password,
          }
        );
        const token = response.data.token;
        this.setToken(token);
        router.push('/home');
      } catch (error) {
        console.error(error);
      }
    },

    async logout() {
      try {
        // Make the logout API request here
        // Example:
        // await axios.post('http://127.0.0.1:8000/api/student/logout/');
        this.clearToken();
        this.user = {};
        router.push('/login');
      } catch (error) {
        console.error(error);
      }
    },

    async register() {
      try {
        await axios.post('http://127.0.0.1:8000/api/student/register/', {
          email: this.email,
          password: this.password,
          student_id: this.student_id,
          name: this.name,
        });
        router.push('/login');
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    setToken(token) {
      this.token = token;
    },
    clearToken() {
      this.token = null;
    },
  },
  persist: true,
});
