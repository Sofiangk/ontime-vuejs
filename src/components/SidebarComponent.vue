<template>
  <div class="sidebar min-h-[83vh]">
    <div class="sidebar-links">
      <router-link
        class="hover:bg-slate-200 my-2 py-4 mx-[10px] border-b-2"
        to="/home"
        >Timetable</router-link
      >
      <router-link
        class="hover:bg-slate-200 my-2 py-4 mx-[10px] border-b-2"
        to="/announcements"
        >Announcement</router-link
      >
      <router-link
        class="hover:bg-slate-200 my-2 py-4 mx-[10px] border-b-2"
        to="/forum"
        >Forum</router-link
      >
      <router-link
        class="hover:bg-slate-200 my-2 py-4 mx-[10px] border-b-2"
        to="/my-courses"
        >My Courses</router-link
      >
    </div>
    <div class="sidebar-footer">
      <router-link
        class="hover:bg-slate-200 my-2 py-4 mx-[10px] border-b-2"
        to="/my-account"
        >My Account</router-link
      >
      <router-link
        class="hover:bg-slate-200 my-2 py-4 mx-[10px] border-b-2 "
        to="/settings"
        >Settings</router-link
      >
      <router-link class="hover:bg-slate-200" to="/">
        <p
          class="hover:bg-slate-200 my-2 py-4 mx-[10px] hover:cursor-pointer"
          @click="logout()"
        >
          Logout
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent',
};
</script>

<style scoped>
.sidebar {
  width: 15vw;
  background-color: #f5f5f5;
  border-right: 2px solid black;
  position: fixed;
  max-height: 80px;
}

.sidebar-header {
  padding: 10px;
  border-bottom: 0.5px solid #ccc;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
}

router-link {
  display: block;
  padding: 5px 0;
}

.sidebar-footer {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  border-top: 1px solid black;
}

.sidebar-footer router-link {
  display: block;
  padding: 5px 0;
  border-bottom: 0.5px solid #ccc;
}

@media screen and (max-width: 768px) {
  .sidebar {
    display: none;
    column-span: 0;
  }

  .sidebar-header {
    display: none;
  }

  .sidebar-links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

  .sidebar-links router-link {
    display: block;
    padding: 2rem;
    border-bottom: 0.5px solid #ccc;
  }

  .sidebar-footer {
    display: none;
  }
}
</style>
