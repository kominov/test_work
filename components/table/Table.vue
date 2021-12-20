<template>
  <div>
    <template v-if="getCompanyList.length">
      <table>
        <Title />
        <tbody>
          <template v-if="getCompanyList.length > 0">
            <Row v-for="(company,idx) in getCompanyList" :key="idx" :company="company" />
          </template>
        </tbody>
      </table>
    </template>
    <template v-else>
      <h2 class="text-center opacity-50">Введите данные о компании</h2>
    </template>
  </div>
</template>

<script>
import Title from "~/components/table/Title.vue";
import Row from "~/components/table/Row.vue";
export default {
  name: "Table",
  components: {
    Title,
    Row,
  },
  computed: {
    getCompanyList() {
      return this.$store.state.company;
    },
  },
};
</script>

<style>
</style>