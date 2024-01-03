<template>
  <div class="navbar-container">
    <div class="logo">
      <img src="/logo.png" alt="Logo" />
    </div>
    <div class="navbar">
      <div class="user-info px-3">
        <i class="border-slate-700 w-2 h-2"></i>
        <img class="user-image" src="/square.png" alt="User Image" />
        <span class="user-name">{{ user.name }}</span>
      </div>
      <div class="title-bar">
        <h1>{{ pageTitle }}</h1>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      user: {
        name: 'John Doe',
        image: '/path/to/user-image.jpg',
      },
      pageTitle: this.$route.name,
    };
  },
  watch: {
    $route(to, from) {
      this.updatePageTitle(to);
    },
  },
  methods: {
    updatePageTitle(route) {
      this.pageTitle = route.meta.title || '';
    },
    mounted() {
      this.updatePageTitle(this.$route);
      this.getUserInfo();
    },
    methods: {
      getUserInfo() {
        axios
          .get('http://127.0.0.1:8000/api/student/')
          .then((response) => {
            this.user.name = response.data.name;
            this.user.image = response.data.image;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
    mounted() {
      this.updatePageTitle(this.$route);
    },
  },
};
</script>

<style scoped>
.navbar-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #000000;
  background-color: white;
  height: 160px;
  position: fixed;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 15%;
  max-height: 160px;
  border-right: 2px solid #000000;
  padding: 1rem;
}

.logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: left;
  padding: 1.5rem;
}
.navbar {
  color: black;
  position: sticky;
  height: fit-content;
  width: 100%;
}

.user-info {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 3px solid #000000;
  margin-bottom: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 90px;
}

.title-bar {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 80px;
  font-size: 2rem;
  font-weight: bold;
}

.user-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
