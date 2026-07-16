import "./chunk-ZDRA4OZL.js";

// src/app/views/members/routes.ts
var membersRoutes = [
  {
    path: "",
    data: {
      title: "Member"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./list-members.component-B5PQGRG3.js").then((m) => m.ListMembersComponent),
        data: {
          title: "List Members"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-members.component-77KC7WYT.js").then((m) => m.CreateMemberComponent),
        data: {
          title: "New Member"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-members.component-VH242TTQ.js").then((m) => m.UpdateMembersComponent),
        data: {
          title: "Update Members"
        }
      }
    ]
  }
];
export {
  membersRoutes
};
//# sourceMappingURL=routes-DOXAZHK5.js.map
