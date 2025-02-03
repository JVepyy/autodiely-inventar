import { defineStore } from 'pinia'
import axios from 'axios'

export const useCarStore = defineStore('cars', {
  state: () => ({
    cars: [],
    message: '',
    error: '',
    isLoading: false,
  }),
  actions: {
    setSelectedCar(car) {
      this.selectedCar = car;
    },
    async fetchCars() {
      this.isLoading = true;
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/cars');
        this.cars = response.data.data;
      } catch (error) {
        console.error('Chyba pri načítaní áut:', error);
        this.error = 'Chyba pri načítaní áut.';
      } finally {
        this.isLoading = false;
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
        if (this.selectedCar) {
          await axios.put(`http://127.0.0.1:8000/api/v1/cars/${this.selectedCar.id}`, car);
          this.message = 'Auto bolo úspešne aktualizované!';
        } else {
          await axios.post('http://127.0.0.1:8000/api/v1/cars', car);
          this.message = 'Auto bolo úspešne pridané!';
        }
        this.fetchCars();
        this.selectedCar = null;
      } catch (error) {
        console.error('Chyba:', error);
        this.error = 'Chyba pri ukladaní auta.';
      }
    },
  },
  getters: {
    getCars: state => state.cars,
    getFormData: state => state.formData,
    getMessage: state => state.message,
  }
});
