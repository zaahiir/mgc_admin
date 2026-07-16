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
        loadComponent: () => import("./list-blog.component-BLIH4HOH.mjs").then((m) => m.ListBlogComponent),
        data: {
          title: "List Blogs"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-blog.component-GABQRHZH.mjs").then((m) => m.CreateBlogComponent),
        data: {
          title: "New Blog"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-blog.component-WGSLHNL6.mjs").then((m) => m.UpdateBlogComponent),
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
//# sourceMappingURL=routes-UOSRH53Y.mjs.map
