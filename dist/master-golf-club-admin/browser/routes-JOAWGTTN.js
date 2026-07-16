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
        loadComponent: () => import("./list-tournament.component-FUECSF6Q.js").then((m) => m.ListTournamentComponent),
        data: {
          title: "List Tournaments"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-tournament.component-CUCM2O3G.js").then((m) => m.CreateTournamentComponent),
        data: {
          title: "New Tournament"
        }
      },
      {
        path: "update",
        loadComponent: () => import("./update-tournament.component-4WHSQSXH.js").then((m) => m.UpdateTournamentComponent),
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
//# sourceMappingURL=routes-JOAWGTTN.js.map
