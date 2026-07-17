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
        loadComponent: () => import("./team.component-XOCQWGNB.js").then((m) => m.TeamComponent),
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
//# sourceMappingURL=routes-RB265JWJ.js.map
