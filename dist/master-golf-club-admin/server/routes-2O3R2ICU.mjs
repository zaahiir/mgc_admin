import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

// src/app/views/scoreboard/routes.ts
var scoreBoardRoutes = [
  {
    path: "",
    data: {
      title: "ScoreBoard"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./list-scoreboard.component-WPJURW64.mjs").then((m) => m.ListScoreboardComponent),
        data: {
          title: "List ScoreBoards"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-scoreboard.component-YZARSADE.mjs").then((m) => m.CreateScoreboardComponent),
        data: {
          title: "New ScoreBoard"
        }
      },
      {
        path: "update",
        loadComponent: () => import("./update-scoreboard.component-3DUWT2QD.mjs").then((m) => m.UpdateScoreboardComponent),
        data: {
          title: "Update ScoreBoards"
        }
      }
    ]
  }
];
export {
  scoreBoardRoutes
};
//# sourceMappingURL=routes-2O3R2ICU.mjs.map
