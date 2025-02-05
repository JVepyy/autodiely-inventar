<template>
  <div class="container mt-4">
    <div class="card shadow-lg p-4 text-white bg-white bg-opacity-10 border-1 border-secondary ">
      <h2 class="mb-4 text-center"> Zoznam dielov</h2>
      <ul class="list-group" >
        <div v-if="isLoading" class="text-center mt-3">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <li
          v-for="part in parts"
          :key="part.id"
          class="list-group-item d-flex justify-content-between align-items-center border-1 border-secondary text-white"
          style="background-color: rgba(255, 255, 255, 0.1);">
          <div class="d-flex flex-column align-items-start">
            <div class="d-flex flex-row gap-2">
              <strong class="fs-5 ">{{ part.name }}</strong>
              <small class="text-white p-1 ml-3">ID ({{ part.id }})</small>
            </div>
            <small class="text-white p-1">
              Sériové číslo: {{ part.serial_number || 'Neznáme' }}
            </small>
            <span
              class="badge mt-1 p-2 w-max"
              :class="typeof part.car === 'object' && part.car !== null ? 'bg-success' : 'bg-secondary'">
              {{ typeof part.car === 'object' && part.car !== null ? `Priradené k autu: ${part.car.name}` : `Priradené k autu s ID: ${part.car}` }}
            </span>
          </div>
        </li>
        <div v-if="!isLoading && parts.length === 0" class="text-center mt-3">
          <p class="text-white">No parts found.</p>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    parts() {
      return this.$filterStore.getSearchResults.parts;
    },
    isLoading() {
      return this.$filterStore.getIsLoading;
    },
    message() {
      return this.$filterStore.getMessage;
    },
    error() {
      return this.$filterStore.getError;
    },
  },
  mounted() {
    this.$filterStore.search('');
  },
};
</script>

<style scoped>
.list-group {
  height: 45vh !important;
  overflow-y: scroll;
}

.list-group::-webkit-scrollbar {
  width: 8px;
}

.list-group::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.list-group::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0.1);
}

.list-group::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

.list-group {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
}
</style>
