
const routes = [
  {
    path: '/',
    component: () => import('layouts/Landing.vue'),
    children: [
      { path: '', component: () => import('pages/Signin.vue') },
      { path: '/signup', component: () => import('pages/Signup.vue') }
    ]
  },
  {
    path: '/parent',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/Users.vue') },
    ]
  },
  {
    path: '/parent/child',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/organisation',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/Users.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
