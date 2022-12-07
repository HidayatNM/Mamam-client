import { defineStore } from "pinia";
import axios from "axios";

export const useCustomerStore = defineStore("customer", {
  state: () => {
    return {
      Merchant: [],
      CategoryMenu: [],
      totalPay: 0,
      totalQty: 0,
    };
  },
  actions: {
    async fetchMerchant(value) {
      try {
        const { merchant } = value;

        const data = await axios({
          url: `http://localhost:3000/merchants/${merchant}`,
          methods: "GET",
        });
        this.Merchant = data.data.Merchant;
        this.CategoryMenu = data.data.Category;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
