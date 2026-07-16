import "./chunk-ZDRA4OZL.js";

// src/app/views/concept/routes.ts
var couponRoutes = [
  {
    path: "",
    data: {
      title: "Concept"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./create-concept.component-NAVNGLUJ.js").then((m) => m.CreateConceptComponent),
        data: {
          title: "Update Concept"
        }
      },
      {
        path: "update",
        loadComponent: () => import("./update-concept.component-64O2L2YF.js").then((m) => m.UpdateConceptComponent),
        data: {
          title: "Update Concept"
        }
      }
    ]
  }
];
export {
  couponRoutes
};
//# sourceMappingURL=routes-PD744FYW.js.map
