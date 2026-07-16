import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

// src/app/views/plan/routes.ts
var planRoutes = [
  {
    path: "",
    data: {
      title: "Plan"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./list-plan.component-FC7I2ZES.mjs").then((m) => m.ListPlanComponent),
        data: {
          title: "List Plans"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-plan.component-C5QZ5G34.mjs").then((m) => m.CreatePlanComponent),
        data: {
          title: "New Plan"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-plan.component-OL3UEOFM.mjs").then((m) => m.UpdatePlanComponent),
        data: {
          title: "Update Plans"
        }
      }
    ]
  }
];
export {
  planRoutes
};
//# sourceMappingURL=routes-S4OO2XWK.mjs.map
