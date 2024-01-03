<template>
  <div class="forum">
    <div class="filters pb-8 border-b-2 border-slate-700">
      <div class="dropdown">
        <button class="all bg-slate-400 ">All</button>
        <select class="department-dropdown bg-slate-300">
          <option selected disabled hidden>Department</option>
          <option value="software-engineering">
            Software Engineering
          </option>
          <option value="computer-network">Computer Network</option>
          <option value="artificial-intelligent">
            Artificial Intelligence
          </option>
        </select>
        <select class="course-dropdown bg-slate-300">
          <option selected disabled hidden>Course</option>
          <option value="c1">
            course 1
          </option>
          <option value="c2">
            course 2
          </option>
          <option value="c3">
            course 3
          </option>
        </select>
      </div>
      <input type="text" class="search-bar" placeholder="Search..." />
    </div>
    <PostComponent
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :body="post.body"
      :tags="post.tags"
    />
  </div>
  <!-- <h1>
      <router-link to="/forum/create">Create Post</router-link>
    </h1> -->
</template>

<script>
import axios from 'axios';
import PostComponent from '../components/PostComponent.vue';

export default {
  name: 'ForumView',
  components: {
    PostComponent,
  },
  data() {
    return {
      posts: [
        { tags: ['course', 'department'] },
        { tags: ['software-engineering', 'course'] },
        { tags: ['computer-network', 'department'] },
        { tags: ['artificial-intelligence', 'course'] },
      ],
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.forum {
  padding: 20px;
}
.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-right: 10px;
}

.all {
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  height: 45px;
  margin-right: 5px;
}

.course-dropdown,
.department-dropdown {
  top: 100%;
  border: 1px solid black;
  border-radius: 3px;
  padding-left: 0.75rem;
  width: 280px;
  height: 45px;
  margin: 0 5px;
  cursor: pointer;
}

.dropdown-item {
  display: block;
  padding: 5px;
  cursor: pointer;
}

.search-bar {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 20rem;
  height: 45px;
}
</style>
