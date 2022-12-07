import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";
export const useMamamStore = defineStore("Mamam", {
  state: () => {
    return {
      isLogin: false,
    };
  },
  actions: {
    async login(input) {
      const { email, password } = input;
      try {
        const { data } = await axios({
          url: `${baseUrl}/login`,
          method: "POST",
          data: {
            email,
            password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("merchant_login", data.foundMerchant.name);
        this.isLogin = true;
        this.router.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    },

    logout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/");
    },

    async register(input) {
      const {
        name,
        email,
        password,
        location,
        brandPict,
        openDay,
        openHour,
        closeHour,
      } = input;
      try {
        const { data } = await axios({
          url: `${baseUrl}/register`,
          method: "POST",
          data: {
            name,
            email,
            password,
            location,
            brandPict,
            openDay,
            openHour,
            closeHour,
          },
        });
        this.router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
  },
});
