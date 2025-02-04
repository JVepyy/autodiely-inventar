<template>
  <div class="container d-flex vh-100 align-items-center text-center">

      <div class="col-4">
        <CreateCarForm/>
      </div>
        <CarsTab />
  </div>
</template>

<script>
import CreateCarForm from "@/app/components/CreateCarForm.vue";
import CarsTab from '@/app/components/CarsTab.vue'

export default {
  name: 'AppCars',
  components: { CarsTab, CreateCarForm },
}
</script>
