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
        loadComponent: () => import("./create-concept.component-V2AK7SH6.js").then((m) => m.CreateConceptComponent),
        data: {
          title: "Update Concept"
        }
      },
      {
        path: "update",
        loadComponent: () => import("./update-concept.component-V5TRHWYX.js").then((m) => m.UpdateConceptComponent),
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
//# sourceMappingURL=routes-XFHNIRRD.js.map
