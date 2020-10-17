
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
    path: '/family',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/Users.vue') },
      { path: '/child', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/organization',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/Users.vue') },
      { path: '/child', component: () => import('pages/Index.vue') },
      { path: '/addchild', component: () => import('pages/AddChild.vue') },
    ]
  },
  {
    path: '/organization/childportal',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/Users.vue') },
    ]
  },
  {
    path: '/organization/user',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
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
