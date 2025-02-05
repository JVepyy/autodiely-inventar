<template>
  <div class="container d-flex flex-column vh-100 overflow-hidden text-center" style="margin-top: 5%">
      <FilterSearchbar  />
    <div class="d-flex flex-row justify-content-center">
      <FilterCarTab />
      <FilterPartTab />
    </div>
  </div>
</template>
<script>
import FilterSearchbar from '@/app/components/FilterSearchbar.vue'
import FilterCarTab from '@/app/components/FilterCarTab.vue'
import FilterPartTab from '@/app/components/FilterPartTab.vue'

export default {
  name: 'AppFilter',
  components: { FilterPartTab, FilterSearchbar, FilterCarTab },
}
</script>


<style scoped>

</style>
