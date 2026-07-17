import "./chunk-ZDRA4OZL.js";

// src/app/views/amenities/routes.ts
var amenitiesRoutes = [
  {
    path: "",
    data: {
      title: "amenities"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./list-amenities.component-6OTOHERS.js").then((m) => m.ListAmenitiesComponent),
        data: {
          title: "List amenities"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-amenities.component-JOSODNLA.js").then((m) => m.CreateAmenitiesComponent),
        data: {
          title: "New amenities"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-amenities.component-O4UJXREL.js").then((m) => m.UpdateAmenitiesComponent),
        data: {
          title: "Update amenities"
        }
      }
    ]
  }
];
export {
  amenitiesRoutes
};
//# sourceMappingURL=routes-6WNGGOTD.js.map
