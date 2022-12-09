import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "https://mamam-production.up.railway.app";

export const useCustomerStore = defineStore("customer", {
  state: () => {
    return {
      Merchant: [],
      CategoryMenu: [],
      menuTrax: [],
      totalPay: 0,
      totalQty: 0,
    };
  },
  actions: {
    async fetchMerchant(value) {
      try {
        const { merchant } = value;

        const data = await axios({
          url: `${baseUrl}/merchants/${merchant}`,
          methods: "GET",
        });
        this.Merchant = data.data.Merchant;
        this.CategoryMenu = data.data.Category;
      } catch (error) {
        console.log(error);
      }
    },
    async addTransaction(input) {
      const merchantId = this.Merchant.id;
      const { name, email, address } = input;

      try {
        const { data } = await axios({
          url: `${baseUrl}/transactions/${merchantId}`,
          method: "POST",
          data: {
            name,
            email,
            address,
            totalPay: this.totalPay,
          },
        });
        localStorage.setItem("email", data.email);
      } catch (err) {
        console.log(err);
      }
    },
    async order() {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/transactions/generate-midtrans-token`,
          data: {
            email: localStorage.getItem("email"),
            gross_amount: this.totalPay,
          },
        });

        // const cb = this.updateStatus;

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            // cb();
            console.log("abc");
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
