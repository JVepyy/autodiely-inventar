<template>
  <div class="container d-flex vh-100 align-items-center text-center">
    <div class="col-4">
      <CreatePartForm />
    </div>
    <PartsTab />
  </div>
</template>

<script>
import CreatePartForm from '@/app/components/CreatePartForm.vue'
import PartsTab from '@/app/components/PartsTab.vue'

export default {
  name: 'AppParts',
  components: { PartsTab, CreatePartForm },
}
</script>
