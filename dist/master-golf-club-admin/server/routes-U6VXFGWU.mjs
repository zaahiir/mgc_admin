import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

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
        loadComponent: () => import("./list-amenities.component-X67VQMRI.mjs").then((m) => m.ListAmenitiesComponent),
        data: {
          title: "List amenities"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-amenities.component-AFTK2NP4.mjs").then((m) => m.CreateAmenitiesComponent),
        data: {
          title: "New amenities"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-amenities.component-ZTLG7ZV6.mjs").then((m) => m.UpdateAmenitiesComponent),
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
//# sourceMappingURL=routes-U6VXFGWU.mjs.map
