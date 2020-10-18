const routes = [
  {
    path: "/",
    component: () => import("layouts/Landing.vue"),
    children: [
      { path: "", component: () => import("pages/Signin.vue") },
      { path: "/signup", component: () => import("pages/Signup.vue") }
    ]
  },
  {
    path: "/family",
    component: () => import("layouts/Dashboard.vue"),
    children: [
      { path: "", component: () => import("pages/Users.vue") },
      { path: "/child", component: () => import("pages/Index.vue") },
      { path: "/chat", component: () => import("pages/Chat.vue") },
      { path: "/feed", component: () => import("pages/Feed.vue") },
      { path: "/events", component: () => import("pages/Events.vue") },
      { path: "/organizations", component: () => import("pages/Organizations.vue") },
      { path: "/donate", component: () => import("pages/Donate.vue") },
    ]
  },
  {
    path: "/organization",
    component: () => import("layouts/Dashboard.vue"),
    children: [
      { path: "", component: () => import("pages/Users.vue") },
      // { path: "/child", component: () => import("pages/Index.vue") },
      { path: "/addchild", component: () => import("pages/AddChild.vue") }
    ]
  },
  {
    path: "/organization/child",
    component: () => import("layouts/Dashboard.vue"),
    children: [
      { path: "/index", component: () => import("pages/Index.vue") },
      { path: "/feed", component: () => import("pages/Feed.vue") },
      { path: "/chat", component: () => import("pages/Chat.vue") },
      { path: "/events", component: () => import("pages/Events.vue") }
    ]
  },
  {
    path: "/user/index",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      // { path: "/chat", component: () => import("pages/Chat.vue") },
      // { path: "/feed", component: () => import("pages/Feed.vue") },
      // { path: "/events", component: () => import("pages/Events.vue") }
    ]
  },
  {
    path: "/user/chat",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Chat.vue") }]
  },
  {
    path: "/user/feed",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Feed.vue") }]
  },
  {
    path: "/user/events",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Events.vue") }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
