<template>
  <div class="list">
    <item v-for="item in list" :itemData="item"></item>
  </div>
</template>

<script>
import Faker from 'faker'
import Vue from 'vue'
import Item from './item/Item.vue'

export default {
  components: {
    Item
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    for (let i = 0; i < 5000; i++) {
      var item = {
        id: i,
        name: Faker.name.findName()
      }
      Vue.set(this.list, i, item)
    }
  }
}
</script>

