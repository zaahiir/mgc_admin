import "./chunk-ZDRA4OZL.js";

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
        loadComponent: () => import("./member-message.component-KDE6H4JQ.js").then((m) => m.MemberMessageComponent),
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
//# sourceMappingURL=routes-4WSZ24W5.js.map
