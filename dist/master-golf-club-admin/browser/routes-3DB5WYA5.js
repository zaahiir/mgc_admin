import "./chunk-ZDRA4OZL.js";

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
        loadComponent: () => import("./list-blog.component-BJ2QMTWP.js").then((m) => m.ListBlogComponent),
        data: {
          title: "List Blogs"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-blog.component-JPAVTDFN.js").then((m) => m.CreateBlogComponent),
        data: {
          title: "New Blog"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-blog.component-TKXNFCCI.js").then((m) => m.UpdateBlogComponent),
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
//# sourceMappingURL=routes-3DB5WYA5.js.map
