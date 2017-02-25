<template>
  <div class="item list-item">
      <div class="row">
        <div class="col-md-2">
          <img :src="item.avatar" class="img-responsive" alt="">
        </div>
        <div class="col-md-8">
          <h4>{{ item.name }}</h4>
          <ul class="list">
            <li>{{ item.gender }}</li>
            <li>{{ item.jobArea }}</li>
            <li>{{ item.jobType }}</li>
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
  props: ['item'],
  data () {
    return {
    }
  // },
  // created () {
  //   console.log('ITEM created')
  // },
  // mounted () {
  //   console.log('ITEM mounted')
  // },
  // updated () {
  //   console.log('ITEM updated')
  // },
  // destroyed () {
  //   console.log('ITEM destroyed')
  }
}
</script>

<style>
  .list-item {
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 20px;
    min-height: 144px;
  }
  .list-item ul.list {
    padding-left: 18px;
  }
</style>

