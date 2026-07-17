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
        loadComponent: () => import("./team.component-SY52GPOQ.mjs").then((m) => m.TeamComponent),
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
//# sourceMappingURL=routes-MW23KFWJ.mjs.map
