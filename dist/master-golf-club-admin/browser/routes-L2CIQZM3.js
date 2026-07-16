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
        loadComponent: () => import("./list-amenities.component-K3VIUAMZ.js").then((m) => m.ListAmenitiesComponent),
        data: {
          title: "List amenities"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-amenities.component-ZQB6UH73.js").then((m) => m.CreateAmenitiesComponent),
        data: {
          title: "New amenities"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-amenities.component-STAOC6XG.js").then((m) => m.UpdateAmenitiesComponent),
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
//# sourceMappingURL=routes-L2CIQZM3.js.map
