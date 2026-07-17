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
        loadComponent: () => import("./create-concept.component-WUPJDH7C.mjs").then((m) => m.CreateConceptComponent),
        data: {
          title: "Update Concept"
        }
      },
      {
        path: "update",
        loadComponent: () => import("./update-concept.component-MXMVESMB.mjs").then((m) => m.UpdateConceptComponent),
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
//# sourceMappingURL=routes-EMQAZVJO.mjs.map
