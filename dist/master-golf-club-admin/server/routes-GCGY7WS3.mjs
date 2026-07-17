import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

// src/app/views/about/routes.ts
var aboutRoutes = [
  {
    path: "",
    data: {
      title: "about"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./about.component-ST2P7WT6.mjs").then((m) => m.AboutComponent),
        data: {
          title: "About"
        }
      }
    ]
  }
];
export {
  aboutRoutes
};
//# sourceMappingURL=routes-GCGY7WS3.mjs.map
