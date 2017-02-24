<template>
  <div class="list">
    <item1 v-for="item in list" :itemData="item" :key="item.id"></item1>
    <!-- <item1 v-for="item in list" :itemData="item"></item1> -->
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
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.time('re-rendering')
    console.log('beforeUpdate')
  },
  updated () {
    console.timeEnd('re-rendering')
    console.log('updated')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>
