<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/20/solid'
import { mapActions, mapState } from 'pinia';
import { useMamamStore } from '../stores';

export default {
  name: 'Dashboard',
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon, PencilSquareIcon, TrashIcon
  },
  computed: {
    ...mapState(useMamamStore, ['data'])
  },
  methods: {
    ...mapActions(useMamamStore, ['fetchData'])
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
        <DisclosureButton
          class="flex w-full rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <div class="flex w-full justify-between">
            <div class="flex gap-2">
              <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
              <span>{{ el.name }}</span>
            </div>
            <div>
              <a href="#">
                <PencilSquareIcon class="h-5 w-5" />
              </a>
            </div>
          </div>
        </DisclosureButton>
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
                    <a href="" data-modal-toggle="authentication-modal">
                      <PencilSquareIcon class="h-5 w-5 text-blue-600" data-modal-toggle="authentication-modal" />
                    </a>
                    <a href="">
                      <TrashIcon class="h-5 w-5 text-red-600" />
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
</template>
