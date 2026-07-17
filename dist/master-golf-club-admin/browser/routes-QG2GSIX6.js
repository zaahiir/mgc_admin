import "./chunk-ZDRA4OZL.js";

// src/app/views/tournament/routes.ts
var tournamentRoutes = [
  {
    path: "",
    data: {
      title: "Tournament"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./list-tournament.component-DEF7WBB7.js").then((m) => m.ListTournamentComponent),
        data: {
          title: "List Tournaments"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-tournament.component-ZKPJFMYE.js").then((m) => m.CreateTournamentComponent),
        data: {
          title: "New Tournament"
        }
      },
      {
        path: "update",
        loadComponent: () => import("./update-tournament.component-U4KKD4SH.js").then((m) => m.UpdateTournamentComponent),
        data: {
          title: "Update Tournaments"
        }
      }
    ]
  }
];
export {
  tournamentRoutes
};
//# sourceMappingURL=routes-QG2GSIX6.js.map
