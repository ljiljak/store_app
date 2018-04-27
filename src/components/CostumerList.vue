<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(costumer, key) in costumers"
      :key="key"
    >
      {{ costumer.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['costumers']
}
</script>