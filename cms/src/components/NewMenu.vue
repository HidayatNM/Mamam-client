<script>
import { mapActions } from 'pinia';
import { useMamamStore } from '../stores';

export default {
  name: 'NewMenu',
  data() {
    return {
      input: {
        name: '',
        description: '',
        price: '',
        imgUrl: '',
        categoryId: 0
      }
    }
  },
  methods: {
    ...mapActions(useMamamStore, ['addMenus']),
    submidHandler() {
      this.addMenus(this.input)
    }
  }
}
</script>

<template>
  <div class="flex justify-center w-full my-4">
    <div class="bg-white shadow rounded-lg w-96 py-4 px-4">
      <form class="space-y-6" action="#" @submit.prevent="submidHandler()">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Add Menu</h5>
        <div>
          <label for="menu-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" name="menu-name" id="menu-name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="input.name" required>
        </div>
        <div>
          <label for="menu-description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <input type="text" name="menu-description" id="menu-description"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="input.description" required>
        </div>
        <div>
          <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
          <input type="text" name="price" id="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="input.price" required>
        </div>
        <div>
          <label for="manu-imgUrl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image
            Url</label>
          <input type="text" name="menu-imgUrl" id="menu-imgUrl"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="input.imgUrl" required>
        </div>
        <div>
          <label for="manu-categoryId"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
          <input type="text" name="menu-categoryId" id="menu-categoryId"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="input.categoryId" required>
        </div>
        <button type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  </div>
</template>