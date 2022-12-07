<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

import ProductCard from '../components/ProductCard.vue';
import { useCustomerStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia';
export default {
  name: 'Menus',
  data() {
    return {
      param: this.$route.params
    }
  },
  components: { TabGroup, TabList, Tab, TabPanels, TabPanel, ProductCard },
  computed: {
    ...mapState(useCustomerStore, ['CategoryMenu', 'totalPay', 'totalQty'])
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
  <div class="flex justify-center">
    <div class="w-full max-w-lg px-2 py-16 sm:px-0">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab v-for="category in CategoryMenu" as="template" :key="category.id" v-slot="{ selected }">
            <button :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]">
              {{ category.name }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="mt-2">
          <TabPanel v-for="(category) in CategoryMenu" :key="category.id" class="rounded-xl bg-blue-200 p-3 space-y-3">
            <ProductCard v-for="(menu) in category.Menus" :key="menu.id" :menu="menu" />
          </TabPanel>
        </TabPanels>
      </TabGroup>
      <div class="mt-5 space-y-5">
        <div class="flex justify-end">
          {{ this.totalQty }}
          <div class="font-bold">Total : &nbsp;</div>
          <div>Rp. {{ this.totalPay }}</div>
        </div>
        <button class="w-full bg-cyan-400 hover:bg-cyan-500 rounded-lg p-2 text-white font-semibold">Checkout</button>
      </div>
    </div>
  </div>
</template>