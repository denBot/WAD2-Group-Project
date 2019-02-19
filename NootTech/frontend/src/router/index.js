import Vue from 'vue'
import Router from 'vue-router'
//import store from '../store'

//import Subdomain from '@/components/Subdomain'
import Base from '../components/Index'
import About from '../components/About'
import TermsOfService from '../components/ToS'
import LoginRegister from '../components/Authentication/LoginRegister'
import Logout from '../components/Authentication/Logout'
import PageNotFound from '../components/Navigation/PageNotFound'
import Privacy from '../components/Privacy'

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Base',
    component: Base
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginRegister
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: Privacy
  },
    {
    path: '/terms',
    name: 'TermsOfService',
    component: TermsOfService
  },
  {
    path: "*", component: PageNotFound
  }
]
/*
  {
      path: '/subdomain/:username/:gen_name',
      name: 'Subdomain',
      component: Subdomain
  },

 */
const router = new Router({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
