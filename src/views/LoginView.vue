<template>
  <main class="grid grid-flow-col grid-cols-11">
    <div
      class="bg-circle w-full col-span-11 aspect-square bg-slate-500 z-0 rounded-t-full fixed translate-auto bottom-10 sm:rounded-b-none"
    ></div>
    <div
      class="min-h-[38rem] h-fit col-span-9 col-start-2 rounded-lg sm:col-span-9 sm:col-start-2 md:col-span-3 md:col-start-5 mt-12 bg-white border-2 border-slate-800 z-10"
    >
      <div class="grid grid-flow-row sm:grid-flow-col grid-row-2 sm:grid-col-2">
        <div class="flex items-center justify-center mx-auto gap-2">
          <img
            class="mx-auto mt-6 w-12 h-12 my-auto sm:ml-0"
            src="/logo.png"
            alt=""
          />
          <p class="mx-auto w-fit text-xl text-center font-semibold pt-8">
            OnTime
          </p>
        </div>
      </div>
      <div class="divider h-10"></div>
      <p class="mx-auto w-fit text-2xl mb-12 font-semibold">
        Good to see you again!
      </p>
      <div class="grid grid-flow-col grid-cols-12">
        <p class="col-span-10 col-start-2 text-sm font-medium">Email</p>
      </div>
      <div class="grid grid-flow-col grid-cols-12 my-2">
        <input
          v-model="email"
          id="email"
          type="email"
          placeholder="yourname_id@limu.edu.ly"
          class="col-span-10 rounded-sm col-start-2 h-[3.375rem] bg-gray-50 pr-4 text-sm font-normal p-3.5"
          required
        />
      </div>
      <div class="grid grid-flow-col grid-cols-12 my-2"></div>
      <div class="grid grid-flow-col grid-cols-12">
        <p class="col-span-10 col-start-2 text-sm font-medium">Password</p>
      </div>
      <div class="grid grid-flow-col grid-cols-12 my-2">
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="••••••••"
          class="col-span-10 rounded-sm col-start-2 h-[3.375rem] bg-gray-50 pr-4 text-lg font-normal p-3.5"
          required
        />
      </div>
      <div class="grid grid-flow-col grid-cols-12 my-4 pb-5">
        <div class="flex items-center justify-between col-span-10 col-start-2">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50"
              />
            </div>
            <div class="ml-2 text-sm">
              <label for="remember" class="text-gray-500 ">Remember me</label>
            </div>
          </div>
          <router-link
            to="#"
            class="text-sm font-medium text-primary-600 hover:underline text-blue-600"
          >
            Forgot password?
          </router-link>
        </div>
      </div>
      <router-link to="/home">
        <div class="grid grid-flow-col grid-cols-12 my-4 pb-5">
          <button
            @click="login()"
            class="bg-blue-800 hover:bg-blue-900 col-span-10 col-start-2 h-[3.375rem] text-white font-medium text-lg rounded-sm"
          >
            Login
          </button>
        </div>
      </router-link>
      <div class="col-span-10 col-start-2">
        <p class="text-center text-sm font-normal text-slate-700">
          Don’t have an account yet?
          <router-link
            to="/signup"
            class="text-blue-700 font-semibold text-primary-600 hover:underline"
            >Sign Up Now!</router-link
          >
        </p>
        <div class="divider h-10"></div>
      </div>
    </div>
  </main>
</template>

<!-- <script>
import { useAuthStore } from '../stores/AuthStore';
import axios from 'axios';

export default {
  name: 'LoginView',
  data() {
    return {
      email: 'sufyan_3196@limu.edu.ly',
      password: '12345678',
    };
  },
  methods: {
    async login() {
      axios
        .post('http://127.0.0.1:8000/api/student/login/', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          // Remove the unused variable "response"
          const token = data.token; // Fix the undefined variable "data"
          useAuthStore().setToken(token);
          this.$router.push('/home').catch((error) => {
            // Fix the undefined variable "error"
            console.error(error);
          });
        });
    },
  },
};
</script> -->

<script>
import { useAuthStore } from '../stores/AuthStore';
import axios from 'axios';

export default {
  name: 'LoginView',
  data() {
    return {
      email: 'sufyan_3196@limu.edu.ly',
      password: '12345678',
    };
  },
  methods: {
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
        useAuthStore().setToken(token);
        this.$router.replace('/home');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
body {
  background-color: #efefef;
}

* {
  font-family: 'Alexandria', sans-serif;
}
</style>
