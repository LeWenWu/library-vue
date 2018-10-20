import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/bookManage/bookList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bookList',
      component: BookList
    }
  ]
})
