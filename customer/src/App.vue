<script>
import Navbar from './components/Navbar.vue';

export default {
  name: "App",
  components: { Navbar }
}
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <Navbar />
    <router-view></router-view>
  </div>
</template>