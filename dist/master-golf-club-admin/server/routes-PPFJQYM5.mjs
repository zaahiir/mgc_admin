import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

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
        loadComponent: () => import("./list-tournament.component-IEFCRICO.mjs").then((m) => m.ListTournamentComponent),
        data: {
          title: "List Tournaments"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-tournament.component-2BL2G5GZ.mjs").then((m) => m.CreateTournamentComponent),
        data: {
          title: "New Tournament"
        }
      },
      {
        path: "update",
        loadComponent: () => import("./update-tournament.component-DVF3TD4P.mjs").then((m) => m.UpdateTournamentComponent),
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
//# sourceMappingURL=routes-PPFJQYM5.mjs.map
