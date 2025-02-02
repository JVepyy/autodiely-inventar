<template>
  <div class="vh-100 d-flex justify-content-center align-items-center text-center text-white">
    <div>
      <h1 class="display-3 mb-4 fw-bold fs-1">Vitajte vo appke na správu autodielov</h1>
      <p class="lead mb-4">Spravujte svoje autá a diely efektívne a jednoducho.</p>
      <router-link to="/auta" class="btn btn-outline-primary btn-lg mt-3">Prejsť na zoznam áut</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLanding',
}
</script>
