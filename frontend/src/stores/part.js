import { defineStore } from 'pinia'
import axios from 'axios'

export const usePartStore = defineStore('parts', {
  state: () => ({
    parts: [],
    message: '',
    error: '',
    isLoading: false,
  }),
  actions: {
    setSelectedPart(part) {
      this.selectedPart = part;
    },
    async fetchParts() {
      this.isLoading = true;
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/parts');
        this.parts = response.data.data;
      } catch (error) {
        console.error('Chyba pri načítaní dielu:', error);
        this.error = 'Chyba pri načítaní dielov.';
      } finally {
        this.isLoading = false;
      }
    },
    async deletePart(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/v1/parts/${id}`);
        this.parts = this.parts.filter(part => part.id !== id);
        this.message = 'Diel bolo úspešne vymazaný!';
      } catch (error) {
        console.error('Chyba pri mazaní dielu:', error);
        this.message = 'Chyba pri mazaní dielu.';
      }
    },
    async submitForm(part) {
      try {
        if (this.selectedPart) {
          await axios.put(`http://127.0.0.1:8000/api/v1/parts/${this.selectedPart.id}`, part);
          this.message = 'Diel bol úspešne aktualizovaný!';
        } else {
          await axios.post('http://127.0.0.1:8000/api/v1/parts', part);
          this.message = 'Diel bol úspešne pridaný!';
        }
        this.fetchParts();
        this.selectedPart = null;
      } catch (error) {
        console.error('Chyba:', error);
        this.error = 'Chyba pri ukladaní dielu.';
      }
    },
  },
  getters: {
    getParts: state => state.parts,
    getFormData: state => state.formData,
    getMessage: state => state.message,
  }
});

