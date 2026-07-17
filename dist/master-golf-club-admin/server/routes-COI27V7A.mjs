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
        loadComponent: () => import("./list-events.component-UP55WHX2.mjs").then((m) => m.ListEventsComponent),
        data: {
          title: "List Events"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-events.component-3KXRD7YM.mjs").then((m) => m.CreateEventsComponent),
        data: {
          title: "New Events"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-events.component-CTTLDEGO.mjs").then((m) => m.UpdateEventsComponent),
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
//# sourceMappingURL=routes-COI27V7A.mjs.map
