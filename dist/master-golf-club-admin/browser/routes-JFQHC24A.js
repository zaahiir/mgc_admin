import "./chunk-ZDRA4OZL.js";

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
        loadComponent: () => import("./list-scoreboard.component-NRMJIMI5.js").then((m) => m.ListScoreboardComponent),
        data: {
          title: "List ScoreBoards"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-scoreboard.component-IJE7DAHV.js").then((m) => m.CreateScoreboardComponent),
        data: {
          title: "New ScoreBoard"
        }
      },
      {
        path: "update",
        loadComponent: () => import("./update-scoreboard.component-PIHDFWSD.js").then((m) => m.UpdateScoreboardComponent),
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
//# sourceMappingURL=routes-JFQHC24A.js.map
