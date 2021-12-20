<template>
  <div class="container">
    <h1 class="text-green-500 text-center mb-10">Таблица Юредических лиц</h1>

    <div class="flex justify-between mb-5">
      <AddInn />
      <button
        @click="showModal"
        class="py-1 px-6 rounded-md bg-[#04AA6D] text-white text-xl border border-white inline-flex items-center"
      >
        <span class="font-semibold pt-1 mr-2 text-4xl">+</span> Добавить компанию
      </button>
    </div>
    <Table />
    <AddCompanyModal @onClose="onCloseModal" v-if="isShowModal" />
  </div>
</template>

<script>
import AddCompanyModal from "~/components/modals/AddCompanyModal.vue";
import AddInn from "~/components/table/AddInn.vue";
export default {
  data() {
    return {
      isShowModal: false,
    };
  },
  name: "IndexPage",
  components: {
    AddCompanyModal,
    AddInn,
  },
  methods: {
    showModal() {
      this.isShowModal = true;
      this.$nextTick(() => {
        this.$modal.show("add-company-modal");
      });
    },
    onCloseModal() {
      this.isShowModal = false;
    },
  },
};
</script>
