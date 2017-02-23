<template>
  <div class="list">
    <item v-for="item in list" :itemData="item"></item>
  </div>
</template>
<script>
import Item from './item/Item.vue'
export default {
  components: {
    Item
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
