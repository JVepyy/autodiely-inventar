<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/app/layouts/DefaultLayout.vue'
export default {
  components: {
    DefaultLayout,
  },
}
</script>
