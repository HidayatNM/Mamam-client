<script>
import { mapWritableState } from 'pinia';
import Navbar from './components/Navbar.vue';
import { useMamamStore } from './stores';

export default {
  name: "App",
  components: { Navbar },
  computed: {
    ...mapWritableState(useMamamStore, ['isLogin'])
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.isLogin = true
    }
  }
}
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
