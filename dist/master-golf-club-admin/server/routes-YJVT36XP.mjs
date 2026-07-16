import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

// src/app/views/events/routes.ts
var eventsRoutes = [
  {
    path: "",
    data: {
      title: "Events"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./list-events.component-AV2NUA45.mjs").then((m) => m.ListEventsComponent),
        data: {
          title: "List Events"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-events.component-TG5TR6RX.mjs").then((m) => m.CreateEventsComponent),
        data: {
          title: "New Events"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-events.component-N5TEV46T.mjs").then((m) => m.UpdateEventsComponent),
        data: {
          title: "Update Events"
        }
      }
    ]
  }
];
export {
  eventsRoutes
};
//# sourceMappingURL=routes-YJVT36XP.mjs.map
