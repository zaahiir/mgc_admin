import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

// src/app/views/team/routes.ts
var teamRoutes = [
  {
    path: "",
    data: {
      title: "Team"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./team.component-TCDW437T.mjs").then((m) => m.TeamComponent),
        data: {
          title: "Team"
        }
      }
    ]
  }
];
export {
  teamRoutes
};
//# sourceMappingURL=routes-GEDHFC5Y.mjs.map
