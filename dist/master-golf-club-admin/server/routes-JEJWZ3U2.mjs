import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

// src/app/views/bookings/routes.ts
var bookingRoutes = [
  {
    path: "",
    data: {
      title: "Booking"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./list-booking.component-3GGCQDCX.mjs").then((m) => m.ListBookingComponent),
        data: {
          title: "List Booking"
        }
      }
    ]
  }
];
export {
  bookingRoutes
};
//# sourceMappingURL=routes-JEJWZ3U2.mjs.map
