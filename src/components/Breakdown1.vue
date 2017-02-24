<template>
  <div class="list">
    <item1 v-for="item in listForRendering" :itemData="item"></item1>
  </div>
</template>
<script>
import Vue from 'vue'
import Item1 from './Item1.vue'
import { update as u } from 'modules/breakdown-update.js'
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
  data () {
    return {
      listForRendering: this.list,
      filteringStates: {}
    }
  },
  methods: {
    update () {
      this.listForRendering = u(this.list, this.filteringStates, null)
    },
    filtersChange (name, value) {
      if (!value || value === null) {
        Vue.delete(this.filteringStates, name)
      } else {
        Vue.set(this.filteringStates, name, value)
      }

      this.$eventHub.$emit('filter::set-changed')
    }
  },
  created () {
    this.$eventHub.$on('filter::clicked', this.filtersChange)
    this.$eventHub.$on('filter::set-changed', this.update)
  }
}
</script>
