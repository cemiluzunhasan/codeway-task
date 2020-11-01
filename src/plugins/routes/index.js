export default [
  {
    path: '/',
    name: 'home',
    component: require('../../layouts').default,
    exact: true
  },
  {
    path: '/auth/login',
    name: 'login',
    component: require('../../views/Auth/Login').default
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: require('../../views/NotFound').default
  }
]