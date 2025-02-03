<template>
  <div class="card p-4 border-secondary bg-white bg-opacity-10" style="width: 382px; height: 410px;">
    <h2 class="text-white mb-4">
      {{ $partStore.selectedPart ? 'Upraviť diel' : 'Vytvoriť diel' }}
    </h2>
    <form @submit.prevent="submitForm">
      <div class="mb-2">
        <label for="partName" class="form-label text-white">Názov dielu</label>
        <input
          type="text"
          class="form-control bg-transparent border border-secondary text-white"
          v-model="formData.name"
          required>
      </div>
      <div class="mb-3">
        <label class="form-label text-white mt-2">Sériové číslo</label>
        <input
          type="number"
          class="form-control bg-transparent border border-secondary text-white"
          v-model="formData.serial_number"
          required
          @input="validateInteger">
      </div>
      <div class="mb-3 d-flex flex-column-reverse justify-content-start align-items-center gap-2">
        <input
          type="number"
          class="form-control bg-transparent border border-secondary text-white "
          v-model="formData.car_id"
          style="width: 150px;">
        <label class="form-check-label text-white">ID auta</label>
      </div>
      <button type="submit" class="btn btn-primary border-0.125rem border-secondary">
        {{ $partStore.selectedPart ? 'Aktualizovať' : 'Odoslať' }}
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'CreatePartForm',
  data() {
    return {
      formData: {
        name: '',
        serial_number: null,
        car_id: null
      },
    };
  },
  watch: {
    '$partStore.selectedPart': {
      handler(newPart) {
        if (newPart) {
          this.formData = { ...newPart };
        } else {
          this.resetForm();
        }
      },
      immediate: true,
    },
  },
  methods: {
    submitForm() {
      this.$partStore.submitForm(this.formData);
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: '',
        serial_number: null,
        car_id: null
      };
    },
  },
};
</script>
<style scoped>
.btn-primary {
  background-color: rgba(12, 7, 48, 0.5);
}
.btn-primary:hover {
  background-color:  rgba(12,7,48,1);
}
</style>
