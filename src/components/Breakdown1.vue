<template>
  <div class="list">
    <virtual-scroller
      class="scroller"
      :items="list"
      :renderers="renderers"
      item-height="143"
      type-field="type"
      key-field="id"
      page-mode
    >
    </virtual-scroller>
    <!-- <item1 v-for="item in list" :itemData="item" :key="item.id"></item1> -->
    <!-- <item1 v-for="item in list" :itemData="item"></item1> -->
  </div>
</template>
<script>
import VirtualScroller from 'components/virtual-scroller/VirtualScroller.vue'
import Item1 from './Item1.vue'

const renderers = Object.freeze({
  profile: Item1
})

export default {
  components: {
    Item1,
    VirtualScroller
  },
  props: {
    list: {
      type: Array,
      required: false,
      default: []
    }
  },
  data () {
    return {
      renderers
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
