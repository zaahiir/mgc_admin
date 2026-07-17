import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

// src/app/views/member-message/routes.ts
var memberMessageRoutes = [
  {
    path: "",
    data: {
      title: "Member Messages"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./member-message.component-SFPLK2E4.mjs").then((m) => m.MemberMessageComponent),
        data: {
          title: "List Member Messages"
        }
      }
    ]
  }
];
export {
  memberMessageRoutes
};
//# sourceMappingURL=routes-IWG22HZN.mjs.map
