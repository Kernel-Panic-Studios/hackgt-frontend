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
    path: "/family/children/",
    component: () => import("layouts/Dashboard.vue"),
    children: [
      { path: "", component: () => import("pages/Users.vue") },
    ]
  },
  {
    path: "/family/child/index",
    component: () => import("layouts/Dashboard.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
    ]
  },
  {
    path: "/family/child/chat",
    component: () => import("layouts/Dashboard.vue"),
    children: [
      { path: "", component: () => import("pages/Chat.vue") },
    ]
  },
  {
    path: "/family/child/feed",
    component: () => import("layouts/Dashboard.vue"),
    children: [
      { path: "", component: () => import("pages/Feed.vue") },
    ]
  },
  {
    path: "/family/child/events",
    component: () => import("layouts/Dashboard.vue"),
    children: [
      { path: "", component: () => import("pages/Events.vue") },
    ]
  },
  {
    path: "/family/child/donate",
    component: () => import("layouts/Dashboard.vue"),
    children: [
      { path: "", component: () => import("pages/Donate.vue") },
    ]
  },
  {
    path: "/family/organizations",
    component: () => import("layouts/Dashboard.vue"),
    children: [
      {path: "",component: () => import("pages/Organizations.vue")}
    ]
  },
  {
    path: "/organization/children",
    component: () => import("layouts/Organization.vue"),
    children: [
      { path: "", component: () => import("pages/Users.vue") }
      // { path: "/child", component: () => import("pages/Index.vue") },
      // { path: "/addchild", component: () => import("pages/AddChild.vue") }
    ]
  },
  {
    path: "/organization/addchild",
    component: () => import("layouts/Dashboard.vue"),
    children: [{ path: "", component: () => import("pages/AddChild.vue") }]
  },
  {
    path: "/organization/child/index",
    component: () => import("layouts/Dashboard.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/organization/child/feed",
    component: () => import("layouts/Dashboard.vue"),
    children: [{ path: "", component: () => import("pages/Feed.vue") }]
  },
  {
    path: "/organization/child/events",
    component: () => import("layouts/Dashboard.vue"),
    children: [{ path: "", component: () => import("pages/Events.vue") }]
  },
  {
    path: "/organization/child/chat",
    component: () => import("layouts/Dashboard.vue"),
    children: [{ path: "", component: () => import("pages/Chat.vue") }]
  },
  {
    path: "/organization/child/donate",
    component: () => import("layouts/Dashboard.vue"),
    children: [{ path: "", component: () => import("pages/Donate.vue") }]
  },
  {
    path: "/user/index",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") }
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
