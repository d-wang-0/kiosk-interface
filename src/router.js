import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/views/Landing'
import Tutorial from '@/views/Tutorial'
import Practice from '@/views/Practice'
import Assessment from '@/views/Assessment'
import Interactive from '@/views/Interactive'
import Results from '@/views/Results'

Vue.use(Router)

export const ROUTES = [
  {
    path: '/',
    name: '0',
    navIndex: 0,
    component: Landing,
    props: { title: 'titles.empty' }
  },
  {
    path: '/tutorial',
    name: '1',
    navIndex: 1,
    component: Tutorial,
    props: { title: 'titles.one' }
  },
  {
    path: '/practice',
    name: '2',
    navIndex: 2,
    component: Practice,
    props: { title: 'titles.two' }
  },
  {
    path: '/assessment',
    name: '3',
    navIndex: 3,
    component: Assessment,
    props: { title: 'titles.three' }
  },
  {
    path: '/assessment/interactive',
    name: '3 ',
    component: Interactive,
    renderBeforeAssessment: true,
    props: { title: 'titles.empty' }
  },
  {
    path: '/assessment/results',
    name: '4',
    navIndex: 4,
    renderBeforeAssessment: true,
    component: Results,
    props: { title: 'titles.four' }
  },
  {
    path: '/assessment/complete',
    name: '5',
    navIndex: 5,
    renderBeforeAssessment: true,
    component: Results,
    props: { title: 'titles.five' }
  },
]

export default new Router({
  mode: "history",
  routes: [
    ...ROUTES,
    {
      path: '*',
      redirect: '/'
    }
  ]
})
