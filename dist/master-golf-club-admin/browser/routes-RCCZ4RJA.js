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
        loadComponent: () => import("./list-members.component-MAHZXUAQ.js").then((m) => m.ListMembersComponent),
        data: {
          title: "List Members"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-members.component-HTYQGISL.js").then((m) => m.CreateMemberComponent),
        data: {
          title: "New Member"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-members.component-ZDOQTQMX.js").then((m) => m.UpdateMembersComponent),
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
//# sourceMappingURL=routes-RCCZ4RJA.js.map
