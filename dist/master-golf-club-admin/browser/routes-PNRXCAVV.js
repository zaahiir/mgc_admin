import "./chunk-ZDRA4OZL.js";

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
        loadComponent: () => import("./list-booking.component-LDGOWNFK.js").then((m) => m.ListBookingComponent),
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
//# sourceMappingURL=routes-PNRXCAVV.js.map
