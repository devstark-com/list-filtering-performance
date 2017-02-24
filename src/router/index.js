import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index.vue'
import List1 from 'components/List1.vue'
import List2 from 'components/List2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/list1',
      name: 'list1',
      component: List1
    },
    {
      path: '/list2',
      name: 'list2',
      component: List2
    }
  ]
})
