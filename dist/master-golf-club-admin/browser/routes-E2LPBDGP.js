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
        loadComponent: () => import("./list-courses.component-R6UYQDJI.js").then((m) => m.ListCoursesComponent),
        data: {
          title: "List Courses"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-courses.component-HKZDRTBK.js").then((m) => m.CreateCoursesComponent),
        data: {
          title: "New Courses"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-courses.component-MDMQCLQM.js").then((m) => m.UpdateCoursesComponent),
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
//# sourceMappingURL=routes-E2LPBDGP.js.map
