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
        loadComponent: () => import("./list-amenities.component-4PU67ZKC.mjs").then((m) => m.ListAmenitiesComponent),
        data: {
          title: "List amenities"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-amenities.component-PURHG5N5.mjs").then((m) => m.CreateAmenitiesComponent),
        data: {
          title: "New amenities"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-amenities.component-GO64AJZZ.mjs").then((m) => m.UpdateAmenitiesComponent),
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
//# sourceMappingURL=routes-LGQHVWUI.mjs.map
