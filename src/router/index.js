import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
{
  path: "/lists",
  name: "lists",
  component: () =>
    import(/* webpackChunkName: "about" */ "@/views/ListAll.vue"),
},
// {
//   path: "/lists/:id",
//   name: "List",
//   component: () =>
//     import(/* webpackChunkName: "userProfile" */ "../views/UserProfile.vue"),
//   children: [
//     {
//       path: "send-message", // WARNING PAS DE / ici ... sinon /send-message serait considéré comme une route premier nivea (racine)
//       name: "UserMessageForm",
//       component: () =>
//         import(
//           /* webpackChunkName: "about" */ "@/components/UserMessageForm.vue"
//         ),
//     },
    // {
    //   path: "my-messages",
    //   name: "UserMessages",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "about" */ "@/components/UserMessages.vue"
    //     ),
    // },
//   ],
// },
{
  path: "*",
  name: "404",
  component: () =>
    import(/* webpackChunkName: "notFound" */ "../views/Notfound.vue"),
},
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
