<template>
  <div class="card p-4 border-secondary bg-white bg-opacity-10" style="width: 382px; height: 390px;">
    <h2 class="text-white mb-4">
      {{ $carStore.selectedCar ? 'Upraviť auto' : 'Vytvoriť auto' }}
    </h2>
    <form @submit.prevent="submitForm">
      <div class="mb-2">
        <label for="carName" class="form-label text-white">Názov auta</label>
        <input
          type="text"
          class="form-control bg-transparent border border-secondary text-white"
          v-model="formData.name"
          required>
      </div>
      <div class="mb-3">
        <label class="form-label text-white mt-2">Evidenčné číslo</label>
        <input
          type="text"
          class="form-control bg-transparent border border-secondary text-white"
          v-model="formData.registration_number"
          :required="formData.is_registered">
      </div>
      <div class="mb-3 d-flex flex-row justify-content-center align-items-center">
        <input
          type="checkbox"
          class="form-check-input me-2"
          v-model="formData.is_registered">
        <label class="form-check-label text-white">Registrované</label>
      </div>
      <button type="submit" class="btn btn-primary border-0.125rem border-secondary">
        {{ $carStore.selectedCar ? 'Aktualizovať' : 'Odoslať' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        registration_number: '',
        is_registered: false,
      },
    };
  },
  watch: {
    '$carStore.selectedCar': {
      handler(newCar) {
        if (newCar) {
          this.formData = {
            ...newCar,
            is_registered: !!newCar.is_registered,
          };
        } else {
          this.resetForm();
        }
      },
      immediate: true,
    },
  },
  methods: {
    submitForm() {
      this.$carStore.submitForm(this.formData);
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: '',
        registration_number: '',
        is_registered: false,
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
