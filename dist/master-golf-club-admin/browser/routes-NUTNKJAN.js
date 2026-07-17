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
        loadComponent: () => import("./member-message.component-Y4KRY6RC.js").then((m) => m.MemberMessageComponent),
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
//# sourceMappingURL=routes-NUTNKJAN.js.map
