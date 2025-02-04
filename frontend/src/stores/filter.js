import { defineStore } from 'pinia';
import axios from 'axios';

export const useFilterStore = defineStore('filter', {
  state: () => ({
    searchResults: {
      cars: [],
      parts: [],
    },
    isLoading: false,
  }),
  actions: {
    async search(query) {
      this.isLoading = true;
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/search?query=${query}`);
        this.searchResults = response.data;
      } catch {
        this.error = 'Something went wrong';
      } finally {
        this.isLoading = false;
      }
    },
  },
  getters: {
    getSearchResults: (state) => state.searchResults,
    getIsLoading: (state) => state.isLoading
  },
});
