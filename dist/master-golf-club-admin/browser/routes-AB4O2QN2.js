import "./chunk-ZDRA4OZL.js";

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
        loadComponent: () => import("./list-plan.component-QJDTBXHN.js").then((m) => m.ListPlanComponent),
        data: {
          title: "List Plans"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-plan.component-KUK5WUBF.js").then((m) => m.CreatePlanComponent),
        data: {
          title: "New Plan"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-plan.component-DU6Q4NVE.js").then((m) => m.UpdatePlanComponent),
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
//# sourceMappingURL=routes-AB4O2QN2.js.map
