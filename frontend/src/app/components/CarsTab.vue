<template>
  <div class="container mt-4">
    <div class="card shadow-lg p-4 text-white bg-white bg-opacity-10 border-1 border-secondary ">
      <h2 class="mb-4 text-center"> Zoznam áut</h2>

      <ul class="list-group" >
        <li
          v-for="car in cars"
          :key="car.id"
          class="list-group-item d-flex justify-content-between align-items-center border-1 border-secondary text-white"
          style="background-color: rgba(255, 255, 255, 0.1);">
          <div class="d-flex flex-column align-items-start">
            <strong class="fs-5">{{ car.name }}</strong>
            <small class="text-white">
              Evidenčné číslo: {{ car.registration_number || 'Neznáme' }}
            </small>
            <span
              class="badge mt-1r"
              :class="car.is_registered ? 'bg-success' : 'bg-secondary'"
              style="width: 120px;">
              {{ car.is_registered ? 'Registrované' : 'Nezaregistrované' }}
            </span>
          </div>

          <button class="btn btn-danger btn-sm px-3 shadow-sm" @click="deleteCar(car.id)">
            Vymazať
          </button>
        </li>
      </ul>

      <p v-if="message" class="alert alert-info mt-3">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cars: [],
      message: '',
    };
  },
  methods: {
    async fetchCars() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/cars');
        this.cars = response.data.data;
        console.log('Načítané autá:', this.cars);
      } catch (error) {
        console.error('Chyba pri načítaní áut:', error);
      }
    },
    async deleteCar(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/v1/cars/${id}`);
        this.cars = this.cars.filter(car => car.id !== id);
        this.message = 'Auto bolo úspešne vymazané!';
      } catch (error) {
        console.error('Chyba pri mazaní auta:', error);
        this.message = 'Chyba pri mazaní auta.';
      }
    },
  },
  mounted() {
    this.fetchCars();
  },
};
</script>
