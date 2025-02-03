import { defineStore } from 'pinia'
import axios from 'axios'

export const useCarStore = defineStore('cars', {
  state: () => ({
    cars: [],
    formData: null,
  }),
  actions: {
    async fetchCars() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/cars')
        this.cars = response.data.data
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
    async submitForm(car) {

      if (!car.registration_number) delete car.registration_number

      try {
        await axios.post('http://127.0.0.1:8000/api/v1/cars', car)
        .then(response => {
          this.message = 'Auto bolo úspešne pridané!'
        })
      } catch (error) {
        console.error('Chyba pri ukladaní auta:', error);
      }

      this.fetchCars()
    }
  },
  getters: {
    getCars: state => state.cars,
    getFormData: state => state.formData,
  }
  
})