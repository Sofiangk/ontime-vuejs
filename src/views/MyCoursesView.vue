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
      class="courses bg-slate-100 rounded-lg border-2 border-black mb-4 w-full px-6 py-4"
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
export default {
  name: 'MyCoursesView',
  data() {
    return {
      courses: [
        { id: 1, name: 'Course 1', selected: false },
        { id: 2, name: 'Course 2', selected: false },
        { id: 3, name: 'Course 3', selected: false },
        { id: 4, name: 'Course 4', selected: false },
        { id: 5, name: 'Course 5', selected: false },
      ],
    };
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
  border-bottom: 1px solid #ccc;
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
