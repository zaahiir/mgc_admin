import "./chunk-ZDRA4OZL.js";

// src/app/views/courses/routes.ts
var coursesRoutes = [
  {
    path: "",
    data: {
      title: "Courses"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./list-courses.component-4DHQX5Q5.js").then((m) => m.ListCoursesComponent),
        data: {
          title: "List Courses"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-courses.component-IS3BG2JS.js").then((m) => m.CreateCoursesComponent),
        data: {
          title: "New Courses"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-courses.component-5CRRIEMD.js").then((m) => m.UpdateCoursesComponent),
        data: {
          title: "Update Coursess"
        }
      }
    ]
  }
];
export {
  coursesRoutes
};
//# sourceMappingURL=routes-TP3UGCRF.js.map
