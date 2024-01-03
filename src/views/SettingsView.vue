<template>
  <div class="w-full p-10">
    <div class="bg-white rounded-lg border-2 border-black mb-4 w-full px-6">
      <div class="p-4">
        <div class="card-header">
          <h2 class="text-xl font-bold">Appearance</h2>
        </div>
        <div class="card-body">
          <div class="flex items-center justify-between py-6 border-b-2">
            <label for="language">Language:</label>
            <select
              class="bg-slate-400 text-white p-4"
              id="language"
              v-model="selectedLanguage"
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
          <div class="flex items-center justify-between py-6 border-b-2">
            <label for="language">Theme</label>
            <select
              class="bg-slate-400 text-white p-4"
              id="language"
              v-model="selectedTheme"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div class="flex items-center justify-between py-6 border-b-0">
            <label for="fontSize">Font Size:</label>
            <select
              class="bg-slate-400 text-white p-4"
              id="fontSize"
              v-model="selectedFontSize"
            >
              <option value="medium">Medium</option>
              <option value="small">Small</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
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
  name: 'SettingsView',
  data() {
    return {
      selectedLanguage: 'en',
      selectedFontSize: 'medium',
      selectedTheme: 'light',
    };
  },
};
</script>

<style scoped>
select {
  border-radius: 4px;
  box-shadow: none;
  width: 50%;
  height: 65px;
  padding: 0 20px;
}

.save-btn {
  border: none;
  border-radius: 3px;
  cursor: pointer;
  height: 45px;
}
</style>
