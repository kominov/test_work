<template>
  <div class="flex flex-col space-y-1">
    <label>Введите инн для поиска компании</label>
    <div class="flex space-x-3 items-center">
      <input
        placeholder="Введите инн"
        class="border-2 border-[#04AA6D]"
        @keypress.enter="getCompany"
        v-model="inn"
        type="number"
      />
      <button @click="getCompany" class="px-3 bg-[#04AA6D] text-white h-full">Найти</button>
    </div>
  </div>
</template>

<script>
const url =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";

const token = "c9205244707772d5705d069aeb860e05d2892466";

export default {
  data() {
    return {
      inn: "",
      newCompany: null,
    };
  },
  methods: {
    async getCompany() {
      const data = JSON.stringify({ query: this.inn });

      let config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token,
        },
      };
      if (this.inn.length !== 10 && this.inn.length !== 9) {
        this.$toast.error("Введите корректный номер");
        return null;
      }
      const res = await this.$axios.post(url, data, config).then((res) => {
        if (!res?.data?.suggestions.length) {
          this.$toast.error("Компания не найдена");
          return null;
        }
        let company = res?.data?.suggestions?.[0];
        const newCompany = {
          id: String(Date.now()),
          name: company?.value,
          address: company?.data?.address?.value,
          OGRN: company?.data?.ogrn,
          INN: company?.data?.inn,
          date: new Date(
            company?.data?.state?.registration_date
          ).toDateString(),
        };
        this.$store.commit("addNewCompany", newCompany);
        this.inn = "";
      });
    },
  },
};
</script>

<style>
</style>