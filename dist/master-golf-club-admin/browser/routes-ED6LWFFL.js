import "./chunk-ZDRA4OZL.js";

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
        loadComponent: () => import("./team.component-G4P55NMD.js").then((m) => m.TeamComponent),
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
//# sourceMappingURL=routes-ED6LWFFL.js.map
