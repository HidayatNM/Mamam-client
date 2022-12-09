<script>
import { mapActions, mapState } from 'pinia';
import { useMamamStore } from '../stores';
import MerchantCard from '../components/MerchantCard.vue';

export default {
  name: "Home",
  components: { MerchantCard },
  computed: {
    ...mapState(useMamamStore, ['listMerchant'])
  },
  methods: {
    ...mapActions(useMamamStore, ['fetchListMerchant'])
  },
  created() {
    this.fetchListMerchant()
  }
}
</script>

<template>
  <div class="flex justify-center mx-auto m-8">
    <div class="grid grid-cols-4 space-x-4">
      <MerchantCard v-for="(merchant, index) in listMerchant" :key="merchant.id" :merchant="merchant" />
    </div>
  </div>
</template>r