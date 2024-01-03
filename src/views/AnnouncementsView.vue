<template>
  <div class="announcements">
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
      v-for="post in announcements"
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
import PostComponent from '../components/PostComponent.vue';

export default {
  name: 'ForumView',
  components: {
    PostComponent,
  },
  data() {
    return {
      announcements: [
        {
          id: 1,
          title: 'First Announcement',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          tags: ['course-name', 'department-name'],
        },
        {
          id: 2,
          title: 'Second Announcement',
          body:
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          tags: ['course-name', 'department-name'],
        },
        {
          id: 3,
          title: 'Third Announcement',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          tags: ['course-name', 'department-name'],
        },
        {
          id: 4,
          title: 'eum et est occaecati',
          body:
            'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
          tags: ['course', 'department'],
        },
        {
          id: 5,
          title: 'nesciunt quas odio',
          body:
            'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
          tags: ['course', 'department'],
        },
        {
          id: 6,
          title: 'dolorem eum magni eos aperiam quia',
          body:
            'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
          tags: ['course', 'department'],
        },

        // Add more posts here...
      ],
    };
  },
};
</script>

<style scoped>
.announcements {
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
