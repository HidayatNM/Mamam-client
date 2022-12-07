<script>
import { Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { ref } from 'vue'
import { ChevronUpIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/20/solid'
import { mapActions, mapState } from 'pinia';
import { useMamamStore } from '../stores';

// const isOpen = ref(true)

export default {
  name: 'Dashboard',
  components: {
    Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, ChevronUpIcon, PencilSquareIcon, TrashIcon
  },
  data() {
    return {
      isOpen: ref(false),
      menu: {
        id: '',
        name: '',
        description: '',
        price: '',
        imgUrl: ''
      }
    }
  },
  computed: {
    ...mapState(useMamamStore, ['data', 'dataEditMenu'])
  },
  methods: {
    ...mapActions(useMamamStore, ['fetchData', 'deleteMenu', 'getEditMenu', 'editMenu']),
    closeModal() {
      this.isOpen = ref(false)
    },
    openModal(id) {
      this.isOpen = ref(true)
      this.getEditMenu(id)
      this.menu.id = this.dataEditMenu.id
      this.menu.name = this.dataEditMenu.name
      this.menu.description = this.dataEditMenu.description
      this.menu.price = this.dataEditMenu.price
      this.menu.imgUrl = this.dataEditMenu.imgUrl
    },
    submitEdit() {
      this.editMenu(this.menu)
    },
  },
  created() {
    this.fetchData()
  }
}
</script>

<template>
  <div class="w-full px-4 pt-16">
    <div class="flex flex-col gap-2 mx-auto w-full max-w-4xl rounded-2 bg-blue-200 rounded-md p-2">
      <Disclosure v-slot="{ open }" v-for="(el) in data" :key="el.id">
        <div
          class="flex rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <div class="flex w-full justify-between">
            <DisclosureButton class="flex w-full ">
              <div class="flex gap-2">
                <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
                <span>{{ el.name }}</span>
              </div>
            </DisclosureButton>
            <div>
              <PencilSquareIcon class="h-5 w-5" />
            </div>
          </div>

        </div>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <div class="grid grid-cols-4 gap-2">
            <div class="mx-auto bg-white rounded-lg" v-for="menu in el.Menus" :key="menu.id">
              <img :src="menu.imgUrl" alt="" class="rounded-t-lg">
              <div class="m-2">
                <p class="font-semibold text-lg">{{ menu.name }}</p>
                <p>{{ menu.description }}</p>
                <div class="flex justify-between mt-4">
                  <p class="font-bold">Rp. {{ menu.price.toLocaleString() }}</p>
                  <div class="flex gap-2">
                    <a href="" data-modal-toggle="authentication-modal" @click.prevent="openModal(menu.id)">
                      <PencilSquareIcon class="h-5 w-5 text-blue-600" data-modal-toggle="authentication-modal" />
                    </a>
                    <a href="">
                      <TrashIcon class="h-5 w-5 text-red-600" @click.prevent="deleteMenu(menu.id)" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>

  <!-- <button type="button" @click="openModal"
    class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
    Open dialog
  </button> -->

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
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
              <!-- <pre>{{ dataEditMenu }}</pre> -->
              <form class="space-y-6" action="#" @submit.prevent="submitEdit()">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Edit Menu</h5>
                <div>
                  <label for="menu-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" name="menu-name" id="menu-name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    v-model="menu.name" required>
                </div>
                <div>
                  <label for="menu-description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <input type="text" name="menu-description" id="menu-description"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    v-model="menu.description" required>
                </div>
                <div>
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input type="text" name="price" id="price"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    v-model="menu.price" required>
                </div>
                <div>
                  <label for="manu-imgUrl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image
                    Url</label>
                  <input type="text" name="menu-imgUrl" id="menu-imgUrl"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    v-model="menu.imgUrl" required>
                </div>
                <button type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
