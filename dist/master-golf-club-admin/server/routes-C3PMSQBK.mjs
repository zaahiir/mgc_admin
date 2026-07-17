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
        loadComponent: () => import("./list-plan.component-OKCB4T2W.mjs").then((m) => m.ListPlanComponent),
        data: {
          title: "List Plans"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-plan.component-KMZ6XO6B.mjs").then((m) => m.CreatePlanComponent),
        data: {
          title: "New Plan"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-plan.component-AZNSDIWI.mjs").then((m) => m.UpdatePlanComponent),
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
//# sourceMappingURL=routes-C3PMSQBK.mjs.map
