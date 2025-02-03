<template>
  <div class="card p-4 border-secondary bg-white bg-opacity-10" style="width: 382px; height: 390px;">
    <h2 class="text-white mb-4">Vytvoriť nové auto</h2>

    <form @submit.prevent="submitForm(car)">
      <div class="mb-2">
        <label for="carName" class="form-label text-white">Názov auta</label>
        <input type="text"  class="form-control  bg-transparent border border-secondary text-white" v-model="car.name" required>
      </div>

      <div class="mb-3">
        <label class="form-label text-white mt-2">Evidenčné číslo</label>
        <input type="text" class="form-control bg-transparent border border-secondary text-white" v-model="car.registration_number" :required="car.is_registered">
      </div>

      <div class="mb-3 d-flex flex-row justify-content-center align-items-center">
        <input type="checkbox" class="form-check-input me-2" v-model="car.is_registered">
        <label class="form-check-label text-white">Registrované</label>
      </div>

      <button type="submit" class="btn btn-primary border-0.125rem border-secondary" style=" background-color: #bef6;  ">Odoslať</button>
    </form>

    <p v-if="message" class="text-white mt-3">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateCarForm',
  data() {
    return {
      car: {
        name: '',
        registration_number: '',
        is_registered: false
      },
      message: ''
    }
  },
  methods: {
  submitForm(car) {
    this.$carStore.submitForm(car)
    this.car.name = ''
    this.car.registration_number = ''
    this.car.is_registered = false
  }
}

};
</script>
