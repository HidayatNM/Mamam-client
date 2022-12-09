import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";
export const useMamamStore = defineStore("Mamam", {
  state: () => {
    return {
      isLogin: false,
      listMerchant: [],
      categoryMenu: [],
      data: [],
      dataEditMenu: {},
      flags: "add",
    };
  },
  actions: {
    async login(input) {
      const { email, password } = input;
      try {
        const { data } = await axios({
          url: `${baseUrl}/merchants/login`,
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
          url: `${baseUrl}/merchants/register`,
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

    async fetchListMerchant() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/merchants`,
          method: "GET",
        });

        this.listMerchant = data.listMerchant;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchMerchantMenu(id) {
      try {
        const { data } = await axios({
          url: `${baseUrl}/merchants/${id}`,
          method: "GET",
        });
        this.categoryMenu = data.CategoryMenu;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchData() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/menus`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.data = data.data;
      } catch (err) {
        console.log(err);
      }
    },

    async addMenus(input) {
      const { name, description, price, imgUrl, categoryid } = input;
      console.log(input);
      try {
        await axios({
          url: `${baseUrl}/menus`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            name: input.name,
            description: input.description,
            price: input.price,
            imgUrl: input.imgUrl,
            categoryid: input.categoryId,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },

    async deleteMenu(id) {
      console.log(id);
      try {
        const { data } = await axios({
          url: `${baseUrl}/menus/${id}`,
          method: "DELETE",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.router.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    },

    async getEditMenu(id) {
      try {
        const { data } = await axios({
          url: `${baseUrl}/menus/${id}`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.dataEditMenu = data.menu;
      } catch (err) {
        console.log(err);
      }
    },

    async editMenu(menu) {
      const { id, name, description, price, imgUrl } = menu;
      try {
        const { data } = await axios({
          url: `${baseUrl}/menus/${id}`,
          method: "PUT",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            name,
            description,
            price,
            imgUrl,
          },
        });
        this.fetchData();
        this.router.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    },
  },
});
