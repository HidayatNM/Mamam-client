import { defineStore } from "pinia";

export const useCustomerStore = defineStore("customer", {
  state: () => {
    return {
      isLogin: false,
    };
  },
  actions: {},
});
