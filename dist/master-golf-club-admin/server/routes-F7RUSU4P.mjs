import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

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
        loadComponent: () => import("./list-courses.component-ARA3GVCW.mjs").then((m) => m.ListCoursesComponent),
        data: {
          title: "List Courses"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-courses.component-CUA3I4A4.mjs").then((m) => m.CreateCoursesComponent),
        data: {
          title: "New Courses"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-courses.component-MKEG3DJL.mjs").then((m) => m.UpdateCoursesComponent),
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
//# sourceMappingURL=routes-F7RUSU4P.mjs.map
