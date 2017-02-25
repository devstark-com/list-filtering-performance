<template>
  <div>
    <h4>SORT BY</h4>
    <div>
      <select class="form-control" v-model="value" @change="select()">
        <optgroup v-for="(name, key) in sortings" :label="name">
          <option :value="{param: key, dir: '1'}">
            {{ name }} ({{ getSortParamSuffix(key, 1) }})
          </option>
          <option :value="{param: key, dir: '-1'}">
            {{ name }} ({{ getSortParamSuffix(key, -1) }})
          </option>
        </optgroup>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sortings: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      value: {
        param: 'name',
        dir: '1'
      }
    }
  },
  methods: {
    select () {
      this.$eventHub.$emit('sorting::changed', this.value)
    },
    getSortParamSuffix (param, dir) {
      switch (param) {
        case 'gender':
          return dir > 0 ? 'F-M' : 'M-F'
        case 'name':
          return dir > 0 ? 'A-Z' : 'Z-A'
        case 'jobArea':
          return dir > 0 ? 'A-Z' : 'Z-A'
        case 'jobType':
          return dir > 0 ? 'A-Z' : 'Z-A'
      }
    }
  }
}
</script>
