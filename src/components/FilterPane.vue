<template>
  <div>
    <h4>FILTERS</h4>
    <div v-if="filters !== null">
      <xfilter v-for="(items, index) in filters" :items="items" :name="index"></xfilter>
    </div>
    <div v-else>No filters available</div>
  </div>
</template>
<script>
import xfilter from './Filter.vue'
export default {
  components: {
    xfilter
  },
  props: {
    filters: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>
