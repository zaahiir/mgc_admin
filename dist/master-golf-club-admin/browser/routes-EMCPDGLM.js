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
        loadComponent: () => import("./list-blog.component-2FHNXQOM.js").then((m) => m.ListBlogComponent),
        data: {
          title: "List Blogs"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-blog.component-MMVD2YG3.js").then((m) => m.CreateBlogComponent),
        data: {
          title: "New Blog"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-blog.component-6KMMQTXK.js").then((m) => m.UpdateBlogComponent),
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
//# sourceMappingURL=routes-EMCPDGLM.js.map
