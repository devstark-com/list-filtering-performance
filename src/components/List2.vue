<template>
  <div class="page container">
    <div class="row">
      <div class="col-md-3">
        <filter-pane :filters="filters"></filter-pane>
      </div>
      <div class="col-md-9">
        <breakdown2 :list="list"></breakdown2>
      </div>
    </div>
  </div>
</template>

<script>
import Faker from 'faker'
import Vue from 'vue'
import FilterPane from './FilterPane.vue'
import Breakdown2 from './Breakdown2.vue'

export default {
  name: 'List2',
  components: {
    FilterPane,
    Breakdown2
  },
  data () {
    return {
      list: [],
      filters: {},
      filteringStates: {}
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
    },
    filtersChange (name, value) {
      if (!value || value === null) {
        Vue.delete(this.filteringStates, name)
      } else {
        Vue.set(this.filteringStates, name, value)
      }

      this.$eventHub.$emit('filter::set-changed', this.name, this.cpValue)
    },
    isItemFiltered (item, criterias) {
      if (criterias.length === 0) return false
      for (let criteria in criterias) {
        if (criterias[criteria] !== item[criteria]) {
          return true
        }
      }
      return false
    },
    filterResults () {
      console.log('filterResults()')
      console.time('data update')
      let criterias = this.filteringStates
      for (let item of this.list) {
        item.filtered = this.isItemFiltered(item, criterias)
      }
      console.timeEnd('data update')
    }
  },
  created () {
    for (let i = 0; i < 10000; i++) {
      var item = {
        id: i,
        filtered: false,
        name: Faker.name.findName(),
        jobArea: Faker.name.jobArea(),
        jobType: Faker.name.jobType(),
        gender: Faker.random.arrayElement(['male', 'female']),
        avatar: Faker.image.avatar()
      }

      Vue.set(this.list, i, item)
    }

    this.populateFilters()

    this.$eventHub.$off()
    this.$eventHub.$on('filter::clicked', this.filtersChange)
    this.$eventHub.$on('filter::set-changed', this.filterResults)
  }
}
</script>

