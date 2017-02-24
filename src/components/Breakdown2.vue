<template>
  <div class="list">
    <item2 v-for="item in list" :itemData="item"></item2>
  </div>
</template>
<script>
import Item2 from './Item2.vue'
export default {
  components: {
    Item2
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
