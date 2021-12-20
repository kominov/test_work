<template>
  <section>
    <modal
      :adaptive="true"
      :minWidth="300"
      :width="1000"
      :shiftY="0"
      height="auto"
      :scrollable="true"
      class="py-4"
      classes="p-8 !h-auto"
      name="add-company-modal"
      @closed="onClose"
    >
      <div class="tm-inputs-modal flex flex-wrap justify-between">
        <div>
          <label>Наименование</label>
          <input v-model="form.name" type="text" placeholder="Введите наименование" />
        </div>
        <div>
          <label>Адрес</label>
          <input v-model="form.address" type="text" placeholder="Введите Адрес" />
        </div>
        <div>
          <label>ОГРН</label>
          <input v-model="form.OGRN" type="number" placeholder="Введите ОГРН" />
        </div>
        <div>
          <label>ИНН</label>
          <input
            minlength="9"
            maxlength="10"
            v-model="form.INN"
            type="number"
            placeholder="Введите ИНН"
          />
        </div>
        <div>
          <label>Дата регистрации</label>
          <input v-model="form.date" type="date" placeholder="Введите дату" />
        </div>
      </div>
      <div class="flex mt-3 justify-end">
        <button
          @click="addCompany"
          class="py-1 px-6 rounded-md bg-[#04AA6D] text-white border border-white inline-flex items-center"
        >
          <span class="font-semibold pt-1 mr-2 text-xl">+</span> Добавить компанию
        </button>
      </div>
    </modal>
  </section>
</template>

<script>
export default {
  name: "addCompanyModal",
  emits: ["onClose"],
  data() {
    return {
      form: {
        id: String(Date.now()),
        name: "",
        address: "",
        OGRN: "",
        INN: "",
        date: "",
      },
    };
  },
  methods: {
    onClose() {
      this.$emit("onClose");
    },
    addCompany() {
      if (!this.checkForm()) {
        this.$toast.error("Введите корректные данные");
        return null;
      }
      this.$store.commit("addNewCompany", this.form);
      this.$modal.hide("add-company-modal");
      this.onClose();
    },
    checkForm() {
      for (let prop in this.form) {
        if (!Object.keys(this.form[prop]).length) return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss">
.tm-inputs-modal > div {
  width: 40%;
  display: flex;
  margin-bottom: 12px;
  flex-direction: column;
  & > input {
    border: 1px solid #ddd;
    @apply py-2 px-3 mt-1;
  }
}
</style>