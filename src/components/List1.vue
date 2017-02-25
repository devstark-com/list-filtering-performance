<template>
  <div class="page container">
    <div class="row">
      <div class="col-md-3">
        <filter-pane :filters="filters"></filter-pane>
      </div>
      <div class="col-md-9">
        <breakdown1 :list="listForRendering"></breakdown1>
      </div>
    </div>
  </div>
</template>

<script>
import Faker from 'faker'
import Vue from 'vue'
import FilterPane from './FilterPane.vue'
import Breakdown1 from './Breakdown1.vue'
import { update as u } from 'modules/breakdown-update.js'
export default {
  components: {
    FilterPane,
    Breakdown1
  },
  data () {
    return {
      filterTypes: [
        'jobArea', 'jobType', 'gender'
      ],
      list: [],
      filters: {},
      listForRendering: [],
      filteringStates: {}
    }
  },
  methods: {
    populateFilters () {
      console.time('filters populating')
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
      console.timeEnd('filters populating')
    },
    update () {
      console.time('data update')
      this.listForRendering = u(this.list, this.filteringStates, null)
      console.timeEnd('data update')
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
    console.time('seeding')
    let items = []
    for (let i = 0; i < 50000; i++) {
      var item = {
        id: i,
        type: 'profile',
        filtered: false,
        name: Faker.name.findName(),
        jobArea: Faker.name.jobArea(),
        jobType: Faker.name.jobType(),
        gender: Faker.random.arrayElement(['male', 'female']),
        avatar: Faker.image.avatar()
      }

      items.push(item)

      for (let n in this.filterTypes) {
        let fType = this.filterTypes[n]

        if (this.filters[fType] === undefined) {
          this.filters[fType] = {}
        }

        if (!(item[fType] in this.filters[fType])) {
          Vue.set(this.filters[fType], item[fType], 1)
        } else {
          this.filters[fType][item[fType]]++
        }
      }
    }

    Vue.set(this, 'list', items)
    console.timeEnd('seeding')

    // this.populateFilters()
    this.update()

    this.$eventHub.$off()
    this.$eventHub.$on('filter::clicked', this.filtersChange)
    this.$eventHub.$on('filter::set-changed', this.update)
  }
}
</script>

