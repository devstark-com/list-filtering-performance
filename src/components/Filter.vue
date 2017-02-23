<template>
  <div>
    <label>{{ name }}:</label>
    <select v-model="value" @change="select()">
      <option value="null">-- none --</option>
      <option v-for="(value, index) in items" :value="index">{{ index }} ({{ value }})</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    items: {
      type: Object,
      required: true
    }
  },
  computed: {
    cpValue () {
      return this.value === 'null' ? null : this.value
    }
  },
  data () {
    return {
      value: null
    }
  },
  methods: {
    select () {
      this.$eventHub.$emit('filter::clicked', this.name, this.cpValue)
    }
  }
}
</script>
