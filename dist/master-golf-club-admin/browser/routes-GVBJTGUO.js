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
        loadComponent: () => import("./list-plan.component-WT52BQ4Z.js").then((m) => m.ListPlanComponent),
        data: {
          title: "List Plans"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-plan.component-COA7CEY2.js").then((m) => m.CreatePlanComponent),
        data: {
          title: "New Plan"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-plan.component-KHLTARKW.js").then((m) => m.UpdatePlanComponent),
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
//# sourceMappingURL=routes-GVBJTGUO.js.map
