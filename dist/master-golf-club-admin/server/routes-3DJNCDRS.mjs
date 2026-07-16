import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

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
        loadComponent: () => import("./create-concept.component-PNLCQ5ME.mjs").then((m) => m.CreateConceptComponent),
        data: {
          title: "Update Concept"
        }
      },
      {
        path: "update",
        loadComponent: () => import("./update-concept.component-X2EI3MKL.mjs").then((m) => m.UpdateConceptComponent),
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
//# sourceMappingURL=routes-3DJNCDRS.mjs.map
