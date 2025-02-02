<template>
  <div class="vh-100 custom-gradient d-flex flex-column">
    <div class="d-flex justify-content-center mt-3">
      <Header />
    </div>
      <slot></slot>
    </div>
</template>

<script>
import Header from '@/app/components/Header.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
  },
}
</script>

<style>
.custom-gradient {
  background: rgb(12,7,48);
  background: radial-gradient(circle, rgba(12,7,48,1) 0%,  rgba(5,5,5,1) 100%);
}
</style>
