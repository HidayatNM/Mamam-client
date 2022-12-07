<script>
import { mapActions } from 'pinia';
import { useMamamStore } from '../stores';

export default {
  name: 'Register',
  data() {
    return {
      input: {
        name: '',
        email: '',
        password: '',
        location: '',
        brandPict: '',
        openDay: '',
        openHour: '',
        closeHour: '',
      }
    }
  },
  methods: {
    ...mapActions(useMamamStore, ['register']),
    registerMerchant() {
      this.register(this.input)
    }
  }
}
</script>

<template>
  <div class="container flex justify-center m-8 mx-auto">
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" action="#" @submit.prevent="registerMerchant">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Merchant Name</label>
          <input type="text" name="merchant-name" id="merchant-name" placeholder="Example"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="input.name" required>
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" name="email" id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com" v-model="input.email" required>
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" name="password" id="password" placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="input.password" required>
        </div>
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
          <input type="text" name="merchant-location" id="merchant-location"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="input.location" required>
        </div>
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand picture</label>
          <input type="text" name="merchant-brandPict" id="merchant-brandPict"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="input.brandPict" required>
        </div>
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Open day</label>
          <input type="text" name="merchant-openDay" id="merchant-openDay"
            placeholder="Senin,Selasa,Rabu,Kamis,Jumat,Sabtu,Minggu"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="input.openDay" required>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Open hour</label>
            <input type="text" name="merchant-openHour" id="merchant-openHour" placeholder="10:00"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              v-model="input.openHour" required>
          </div>
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Close hour</label>
            <input type="text" name="merchant-closeHour" id="merchant-closeHour" placeholder="10:00"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              v-model="input.closeHour" required>
          </div>
        </div>
        <button type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  </div>
</template>