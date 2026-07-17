import "./chunk-ZDRA4OZL.js";

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
        loadComponent: () => import("./list-events.component-BVIHQWGS.js").then((m) => m.ListEventsComponent),
        data: {
          title: "List Events"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-events.component-5QUWYNVT.js").then((m) => m.CreateEventsComponent),
        data: {
          title: "New Events"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-events.component-63JVOVCZ.js").then((m) => m.UpdateEventsComponent),
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
//# sourceMappingURL=routes-2BYFVLDO.js.map
