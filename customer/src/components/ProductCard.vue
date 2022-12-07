<script>

import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/vue/20/solid'
import { useCustomerStore } from '../stores/counter'
import { mapWritableState } from 'pinia';
export default {
  name: "ProductCard",
  props: ['menu'],
  components: { PlusCircleIcon, MinusCircleIcon },
  data() {
    return {
      qty: 0,
      total: 0
    }
  },
  computed: {
    ...mapWritableState(useCustomerStore, ['totalPay', 'totalQty']),
  },
  methods: {
    counterPlus(val) {
      this.qty += 1
      this.totalPay += val
      this.totalQty += 1
    },
    counterMinus(val) {
      this.qty -= 1
      this.totalPay -= val
      this.totalQty -= 1
    },
  }
}
</script>

<template>
  <div>
    <div class="flex w-full bg-white rounded-lg shadow-md">
      <div>
        <img :src="menu.imgUrl" class="rounded-l-lg h-48 w-48 shadow" alt="">
      </div>
      <div class="flex flex-col justify-between w-full max-w-xs px-2">
        <div>
          <div class="text-lg font-bold">
            {{ menu.name }}
          </div>
          <div class="font-light">{{ menu.description }}</div>
        </div>
        <div class="flex justify-between mb-2">
          <div>
            <p>Rp. {{ menu.price }}</p>
          </div>
          <div class="flex gap-2">
            <button @click="counterMinus(menu.price)" :disabled="!this.qty">
              <MinusCircleIcon class="h-5 w-5" />
            </button>
            <div>{{ this.qty }}</div>
            <button @click="counterPlus(menu.price)">
              <PlusCircleIcon class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>