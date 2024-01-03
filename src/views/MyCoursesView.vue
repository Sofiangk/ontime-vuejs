<template>
  <div class="content">
    <div class="filters pb-8 border-b-2 border-slate-700">
      <div class="dropdown">
        <button class="general bg-slate-400 ">General</button>
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
      </div>
      <input type="text" class="search-bar" placeholder="Search..." />
    </div>

    <div
      class="courses bg-slate-300 rounded-lg border-2 border-black mb-4 w-full px-6 py-4"
    >
      <div class="course" v-for="course in courses" :key="course.id">
        <div class="course-info">
          <span>{{ course.name }}</span>
          <input type="checkbox" v-model="course.selected" />
        </div>
        <hr class="course-separator" />
      </div>
    </div>
    <div class="save flex items-center justify-end w-full m-0">
      <button class="save-btn bg-slate-500 text-white px-10">
        Save
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyCoursesView',
  data() {
    return {
      courses: [
        { id: 1, name: 'Programming I', selected: false },
        { id: 2, name: 'Programming II', selected: false },
        { id: 3, name: 'Programming III', selected: false },
        { id: 4, name: 'Intro to Software Engineering', selected: false },
        { id: 5, name: 'Intro to Computer Network', selected: false },
        { id: 6, name: 'Intro to Artificial Intelligence', selected: false },
        { id: 7, name: 'Operating Systems', selected: false },
        {
          id: 8,
          name: 'Database Management Systems',
          selected: false,
        },
        { id: 9, name: 'Web Development', selected: false },
        { id: 10, name: 'Software Testing', selected: false },
        { id: 11, name: 'Computer Architecture', selected: false },
        { id: 12, name: 'Data Structures & Algorithms', selected: false },
        { id: 13, name: 'Software Development Practices', selected: false },
        { id: 14, name: 'Security Practices', selected: false },
        { id: 15, name: 'Legal & Ethical Issues I', selected: false },
        { id: 16, name: 'Legal & Ethical Issues II', selected: false },
        { id: 17, name: 'IT Project Management', selected: false },
        { id: 18, name: 'Software Design', selected: false },
        { id: 19, name: 'Software Requirements', selected: false },
        { id: 20, name: 'Software Maintenance', selected: false },
      ],
    };
  },
  methods: {
    saveCourses() {
      // Save courses
    },
    fetchCourses() {
      // Fetch courses
      axios
        .get('http://localhost:3000/courses')
        .then((response) => {
          this.courses = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  width: 100%;
}
.course-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #565656;
  width: 100%;
}

.course-info span {
  font-size: 1.2rem;
}

.courses {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.general {
  border: none;
  border-radius: 3px;
  padding: 5px 15px;
  cursor: pointer;
  height: 45px;
  margin-right: 10px;
}

.save-btn {
  border: none;
  border-radius: 3px;
  cursor: pointer;
  height: 45px;
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

.search-bar {
  padding: 5px 10px;
  border: 1px solid #b5b5b5;
  border-radius: 3px;
  width: 20rem;
  height: 45px;
}
</style>
