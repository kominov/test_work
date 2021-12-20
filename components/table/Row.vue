<template>
  <tr>
    <td>{{company.name}}</td>
    <td>
      <textarea
        @blur="updateAddress"
        v-model="address"
        type="text"
        class="w-full hover:bg-[#ddd] px-2 underline cursor-pointer bg-[#f2f2f2]"
      />
    </td>
    <td>{{company.OGRN}}</td>
    <td>{{company.INN}}</td>
    <td>{{company.date}}</td>
    <td @click="deleteCompany" class="text-red-700 font-semibold cursor-pointer">Удалить</td>
  </tr>
</template>

<script>
export default {
  name: "Row",
  data() {
    return {
      address: "",
    };
  },
  props: {
    company: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.address = this.company.address;
  },
  methods: {
    updateAddress() {
      const newAddress = this.address;
      this.$store.commit("changeAddress", { id: this.company.id, newAddress });
    },
    deleteCompany() {
      if (confirm("Удалить компанию?"))
        this.$store.commit("deleteCompany", this.id);
    },
  },
};
</script>

<style>
</style>