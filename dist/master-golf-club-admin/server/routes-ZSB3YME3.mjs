import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

// src/app/views/blog/routes.ts
var blogRoutes = [
  {
    path: "",
    data: {
      title: "Blog"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./list-blog.component-6S2LWGGE.mjs").then((m) => m.ListBlogComponent),
        data: {
          title: "List Blogs"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-blog.component-K7REOQS2.mjs").then((m) => m.CreateBlogComponent),
        data: {
          title: "New Blog"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-blog.component-PBFW4QDR.mjs").then((m) => m.UpdateBlogComponent),
        data: {
          title: "Update Blogs"
        }
      }
    ]
  }
];
export {
  blogRoutes
};
//# sourceMappingURL=routes-ZSB3YME3.mjs.map
