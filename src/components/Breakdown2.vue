<template>
  <div class="list">
    <item2 v-for="item in list" :itemData="item" v-show="!item.filtered" :key="item.id"></item2>
  </div>
</template>
<script>
import Item2 from './Item2.vue'
export default {
  name: 'Breakdown2',
  components: {
    Item2
  },
  props: {
    list: {
      type: Array,
      required: false,
      default: []
    }
  },
  beforeUpdate: function () {
    console.time('re-rendering')
    console.log('beforeUpdate')
  },
  updated: function () {
    console.timeEnd('re-rendering')
    console.log('updated')
  }
}
</script>
