import { createRouter, createWebHashHistory  } from "vue-router";
import Layout from '@/layout/LayoutView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/HomePage",
      component: Layout,
      name: "Main",
      children: [
        {
          path: "/HomePage",
          name: "HomePage",
          component: () => import("@/view/homePage/HomePage.vue"),
        },
        {
          path: "/ComparePage",
          name: "ComparePage",
          component: () => import("@/view/comparePage/ComparePage.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("@/view/notFoundPage/NotFoundPage.vue"),
    },
  ],
});

export default router;
