<script>
import { mapActions, mapState } from 'pinia';
import { useCustomerStore } from '../stores/counter';
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
export default {
  name: 'Merchant',
  components: {
    ChevronRightIcon
  },
  data() {
    return {
      param: this.$route.params
    }
  },
  computed: {
    ...mapState(useCustomerStore, ['Merchant'])
  },
  methods: {
    ...mapActions(useCustomerStore, ['fetchMerchant']),
  },
  created() {
    this.fetchMerchant(this.param)
  }
}
</script>

<template>
  <div class="flex justify-center m-8 mx-auto">
    <div class="w-full max-w-sm bg-white rounded-lg shadow">
      <div class="flex justify-center rounded-full pt-4">
        <img :src="Merchant.brandPict" alt="" class="rounded-full h-48 w-48">
      </div>
      <h3 class="text-xl font-bold flex justify-center pt-3">{{ Merchant.name }}</h3>
      <div class="flex flex-col justify-center items-center mb-3">
        <p>{{ Merchant.location }}</p>
        <p>{{ Merchant.openHour }}-{{ Merchant.closeHour }}</p>
      </div>
    </div>
  </div>

  <div class="flex justify-center px-4">
    <router-link class="w-full max-w-sm bg-white rounded-lg shadow-md h-8" :to="{ name: 'Menus' }">
      <div class="flex justify-center">
        <div class="font-bold">Lihat Menu</div>
      </div>
    </router-link>
  </div>
</template>r