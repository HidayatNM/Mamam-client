<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/vue/20/solid'
import { useCustomerStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia';
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue';
export default {
  name: 'Menus',
  data() {
    return {
      param: this.$route.params,
      isOpen: ref(false),
      input: {
        name: '',
        email: '',
        address: '',
      }
    }
  },
  components: {
    TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, TabGroup, TabList, Tab, TabPanels, TabPanel, ProductCard, PlusCircleIcon, MinusCircleIcon
  },
  computed: {
    ...mapState(useCustomerStore, ['CategoryMenu', 'totalPay', 'totalQty', 'menuTrax'])
  },
  methods: {
    ...mapActions(useCustomerStore, ['fetchMerchant', 'addTransaction', 'order']),
    closeModal() {
      this.isOpen = ref(false)
      this.addTransaction(this.input)
      this.order()
    },
    openModal() {
      this.isOpen = ref(true)
    },
    // addTranx() {
    //   this.addTransaction(this.input)
    //   this.order()
    // }
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
          <div class="font-bold">Total : &nbsp;</div>
          <div>Rp. {{ this.totalPay }}</div>
        </div>
        <button class="w-full bg-cyan-400 hover:bg-cyan-500 rounded-lg p-2 text-white font-semibold"
          @click.prevent="openModal">Checkout</button>

      </div>
    </div>
  </div>

  <!-- <div class="fixed inset-0 flex items-center justify-center">
    <button type="button" @click="openModal"
      class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      Open dialog
    </button>
  </div> -->
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close.prevent="closeModal" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <form class="space-y-6" action="#" @submit.prevent="addTranx">
                <h5 class="text-xl font-medium text-gray-900">Order information</h5>
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                  <input type="text" name="Name" id="Name" placeholder="Example"
                    class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    v-model="input.name" required>
                </div>
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input type="text" name="Email" id="Email" placeholder="Example"
                    class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    v-model="input.email" required>
                </div>
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Address</label>
                  <input type="text" name="Address" id="Address" placeholder="Example"
                    class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    v-model="input.address" required>
                </div>
              </form>

              <div class="py-2 space-y-3">
                <div v-for="(menu, index) in menuTrax" :key="index" class="flex w-full bg-white rounded-lg shadow-md">
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
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-between mt-4">
                <button type="button"
                  class="inline-flex justify-center rounded-md border mt-2 border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click.prevent="closeModal">
                  Got it, thanks!
                </button>
                <div>
                  <div class="font-bold">Total Payment : </div>
                  <div class="font-bold">Rp. {{ this.totalPay }}</div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

</template>