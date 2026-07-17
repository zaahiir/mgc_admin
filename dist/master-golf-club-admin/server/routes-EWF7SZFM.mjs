import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

// src/app/views/coupon/routes.ts
var couponRoutes = [
  {
    path: "",
    data: {
      title: "Coupon"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./list-coupon.component-Y745OWT4.mjs").then((m) => m.ListCouponComponent),
        data: {
          title: "List Coupons"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-coupon.component-UE53WBZO.mjs").then((m) => m.CreateCouponComponent),
        data: {
          title: "New Coupon"
        }
      },
      {
        path: "update",
        loadComponent: () => import("./update-coupon.component-C5QD6FAR.mjs").then((m) => m.UpdateCouponComponent),
        data: {
          title: "Update Coupons"
        }
      }
    ]
  }
];
export {
  couponRoutes
};
//# sourceMappingURL=routes-EWF7SZFM.mjs.map
