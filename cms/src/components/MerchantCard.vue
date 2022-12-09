<script>
import { mapActions } from 'pinia';
import { useMamamStore } from '../stores';

export default {
  name: 'MerchantCard',
  props: ['merchant'],
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(useMamamStore, ['fetchMerchantMenu']),
    getEditMenuById(id) {
      this.fetchMerchantMenu(id)
    }
  },
  created() {
    this.fetchMerchantMenu()
  }
}
</script>

<template>
  <div class="bg-white shadow rounded-lg">
    <div class="my-2 mx-6">
      <div class="flex justify-center py-2">
        <img class="rounded-full h-40 w-40" :src="merchant.brandPict" alt="Brand Pict">
      </div>
      <div class="flex justify-center">
        <div>
          <div class="text-center font-bold text-lg">{{ merchant.name }}</div>
          <div class="pt-6">
            <div class="text-center">{{ merchant.location }}</div>
            <div class="text-center">Senin - Minggu</div>
            <div class="text-center">{{ merchant.openHour }} - {{ merchant.closeHour }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-2 px-2">
      <!-- <router-link to="/{{merchant.name}}">List Menu</router-link> -->
      <!-- <button class="w-full bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg py-1"
        @click="$router.params({ name: merchant.name })">
        List Menu
      </button> -->
    </div>
  </div>
</template>