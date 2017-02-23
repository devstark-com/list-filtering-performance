<template>
  <div class="page">
    <filter-pane :filters="filters"></filter-pane>
    <breakdown :list="list"></breakdown>
  </div>
</template>

<script>
import Faker from 'faker'
import Vue from 'vue'
import FilterPane from './FilterPane.vue'
import Breakdown from './Breakdown.vue'

export default {
  components: {
    FilterPane,
    Breakdown
  },
  data () {
    return {
      list: [],
      filters: {}
    }
  },
  methods: {
    populateFilters () {
      let criteria = ['jobArea', 'jobType', 'gender']
      for (let n in this.list) {
        let listItem = this.list[n]
        for (let k in criteria) {
          let filter = criteria[k]
          if (this.filters[filter] === undefined) {
            this.filters[filter] = {}
          }

          if (!(listItem[filter] in this.filters[filter])) {
            Vue.set(this.filters[filter], listItem[filter], 1)
          } else {
            this.filters[filter][listItem[filter]]++
          }
        }
      }
    }
  },
  created () {
    for (let i = 0; i < 5000; i++) {
      var item = {
        id: i,
        name: Faker.name.findName(),
        jobArea: Faker.name.jobArea(),
        jobType: Faker.name.jobType(),
        gender: Faker.random.arrayElement(['male', 'female'])
      }

      Vue.set(this.list, i, item)
    }
    this.populateFilters()
  }
}
</script>

