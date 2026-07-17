import "./chunk-ZDRA4OZL.js";

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
        loadComponent: () => import("./list-coupon.component-HVW7L3MJ.js").then((m) => m.ListCouponComponent),
        data: {
          title: "List Coupons"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-coupon.component-L3XHGVSR.js").then((m) => m.CreateCouponComponent),
        data: {
          title: "New Coupon"
        }
      },
      {
        path: "update",
        loadComponent: () => import("./update-coupon.component-HUNBADBQ.js").then((m) => m.UpdateCouponComponent),
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
//# sourceMappingURL=routes-YIWO5QK6.js.map
