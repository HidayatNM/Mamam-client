<script>
import { mapActions, mapState } from 'pinia';
import { useCustomerStore } from '../stores/counter';
export default {
  name: 'Merchant',
  data() {
    return {
      param: this.$route.params
    }
  },
  computed: {
    ...mapState(useCustomerStore, ['Merchant'])
  },
  methods: {
    ...mapActions(useCustomerStore, ['fetchMerchant'])
  },
  created() {
    this.fetchMerchant(this.param)
  }
}
</script>

<template>
  <div class="container flex justify-center m-8 mx-auto">
    <div class="w-full max-w-sm bg-white rounded-lg shadow-md">
      <div class="flex justify-center rounded-full">
        <img :src="Merchant.brandPict" alt="" class="h-48 w-48">
      </div>
      <h3 class="text-xl font-bold flex justify-center">{{ Merchant.name }}</h3>
      <p>{{ Merchant.location }}</p>
      <p>{{ Merchant.openHour }}-{{ Merchant.closeHour }}</p>
    </div>
  </div>
  <div class="container flex justify-center px-4 py-2">
    <router-link class="w-full max-w-sm bg-white rounded-lg shadow-md h-8" :to="{ name: 'Menus' }">
      <div class="flex">
        <span>Lihat Menu</span>
        <!-- <ChevronRightIcon class="h-5 w-5" /> -->
      </div>
    </router-link>
  </div>
</template>r