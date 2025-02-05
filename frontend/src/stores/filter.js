import { defineStore } from 'pinia';
import axios from 'axios';

const $axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

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
        const response = await $axios.get(`/api/v1/search?query=${query}`);
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
