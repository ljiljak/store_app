<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-4">
        <CostumerList :costumers="costumers" />
      </div>
      <div class="col-8">
        <CostumerDetails />
      </div>
    </div>
  </div>
</template>

<script>
import CostumerList from '../components/CostumerList.vue'
import CostumerDetails from '../components/CostumerDetails.vue'
export default {
  components: {
    CostumerList,
    CostumerDetails
  },
  data() {
    return {
      costumers: [
        { name: 'John Doe' },
        { name: 'Pera Peric' },
        { name: 'Nenad Vujicic' }
      ]
    }
  }
}
</script>