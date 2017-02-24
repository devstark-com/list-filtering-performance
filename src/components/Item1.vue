<template>
  <div class="item list-item">
      <div class="row">
        <div class="col-md-2">
          <img :src="itemData.avatar" class="img-responsive" alt="">
        </div>
        <div class="col-md-8">
          <h4>{{ itemData.name }}</h4>
          <ul class="list">
            <li>{{ itemData.gender }}</li>
            <li>{{ itemData.jobArea }}</li>
            <li>{{ itemData.jobType }}</li>
          </ul>
        </div>
        <div class="col-md-2">
          <a href="#" class="btn btn-primary btn-block">Hire!</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['itemData'],
  data () {
    return {
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  updated () {
    console.log('updated')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>

<style>
  .list-item {
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 20px;
  }
  .list-item ul.list {
    padding-left: 18px;
  }
</style>

