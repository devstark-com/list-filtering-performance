<template>
  <div class="list">
    <item1 v-for="item in list" :itemData="item"></item1>
  </div>
</template>
<script>
import Item1 from './Item1.vue'
export default {
  components: {
    Item1
  },
  props: {
    list: {
      type: Array,
      required: false,
      default: []
    }
  }
}
</script>
