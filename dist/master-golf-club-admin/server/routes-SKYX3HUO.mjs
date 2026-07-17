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
        loadComponent: () => import("./list-tournament.component-DPQDNJEQ.mjs").then((m) => m.ListTournamentComponent),
        data: {
          title: "List Tournaments"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-tournament.component-2DI7CS4J.mjs").then((m) => m.CreateTournamentComponent),
        data: {
          title: "New Tournament"
        }
      },
      {
        path: "update",
        loadComponent: () => import("./update-tournament.component-TPXRFOKI.mjs").then((m) => m.UpdateTournamentComponent),
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
//# sourceMappingURL=routes-SKYX3HUO.mjs.map
