import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import AnnouncementsView from '../views/AnnouncementsView.vue';
import SignupView from '../views/SignupView.vue';
import ForumView from '../views/ForumView.vue';
import MyCourseView from '../views/MyCourseView.vue';
import MyAccountView from '../views/MyAccountView.vue'; // Add this line
import SettingsView from '../views/SettingsView.vue'; // Add this line

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'TimeTable',
      hideNavbar: false,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: '/announcements',
    name: 'announcements',
    component: AnnouncementsView,
    meta: {
      title: 'Announcement',
      hideNavbar: false,
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: '/forum',
    name: 'forum',
    component: ForumView,
    meta: {
      title: 'Forum',
      hideNavbar: false,
    },
  },
  {
    path: '/my-course',
    name: 'my-course',
    component: MyCourseView,
    meta: {
      title: 'My Course',
      hideNavbar: false,
    },
  },
  {
    path: '/my-account', // Add this route
    name: 'my-account',
    component: MyAccountView, // Add this route
    meta: {
      title: 'My Account',
      hideNavbar: false,
    },
  },
  {
    path: '/settings', // Add this route
    name: 'settings',
    component: SettingsView, // Add this route
    meta: {
      title: 'Settings',
      hideNavbar: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
