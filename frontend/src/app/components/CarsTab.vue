<template>
  <div class="container mt-4">
    <div class="card shadow-lg p-4 text-white bg-white bg-opacity-10 border-1 border-secondary ">
      <h2 class="mb-4 text-center"> Zoznam áut</h2>

      <ul class="list-group" >
        <div v-if="$carStore.isLoading" class="text-center mt-3">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <li
          v-for="car in cars"
          :key="car.id"
          class="list-group-item d-flex justify-content-between align-items-center border-1 border-secondary text-white"
          style="background-color: rgba(255, 255, 255, 0.1);">
          <div class="d-flex flex-column align-items-start">
            <div class="d-flex flex-row gap-2">
              <strong class="fs-5 ">{{ car.name }}</strong>
              <small class="text-white p-1 ml-3">ID ({{ car.id }})</small>
            </div>
            <small class="text-white p-2">
              Evidenčné číslo: {{ car.registration_number || 'Neznáme' }}
            </small>
            <span
              class="badge mt-1r p-2"
              :class="car.is_registered ? 'bg-success' : 'bg-secondary'"
              style="width: 120px;">
              {{ car.is_registered ? 'Registrované' : 'Nezaregistrované' }}
            </span>
          </div>
          <div class="d-flex flex-row justify-content-end gap-2 icon-link">
            <button
              class="btn btn-primary btn-sm px-3 shadow-sm border-0.125rem border-secondary"
              @click="$carStore.setSelectedCar(car)">
            Upraviť
            </button>
            <button class="btn btn-danger btn-sm px-3 shadow-sm" @click="$carStore.deleteCar(car.id)">
              Vymazať
            </button>
        </div>
        </li>
      </ul>

      <p v-if="message" class="alert alert-info mt-3">{{ $carStore.message }}</p>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    cars() {
      return this.$carStore.cars
    },
    message() {
      return this.$carStore.message;
    }
  },
  mounted() {
    this.$carStore.fetchCars()
  },
};
</script>

<style scoped>
.list-group {
  height: 50vh !important;
  overflow-y: scroll;
}
.btn-primary {
  background-color: rgba(12, 7, 48, 0.5);
}
.btn-primary:hover {
  background-color:  rgba(12,7,48,1);
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
