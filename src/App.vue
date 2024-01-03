<template>
  <div class="grid grid-cols-12 h-screen">
    <NavbarComponent class="z-10 col-span-12" v-if="!$route.meta.hideNavbar" />
    <SidebarComponent
      class="mt-[10rem] col-start-2 col-span-2 full-minus-navbar"
      v-if="!$route.meta.hideNavbar"
    />
    <router-view
      :class="
        $route.meta.hideNavbar
          ? 'col-span-full bg-white'
          : 'col-span-10 col-start-3 mt-[10rem] bg-white'
      "
    />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    SidebarComponent,
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: white;
}

.full-minus-navbar {
  height: calc(100vh - 60px);
}

router-view {
  height: calc(100vh - 60px);
}
</style>
