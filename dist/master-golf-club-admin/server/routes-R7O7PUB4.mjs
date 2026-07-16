import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

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
        loadComponent: () => import("./list-members.component-MHGRXVJM.mjs").then((m) => m.ListMembersComponent),
        data: {
          title: "List Members"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-members.component-PKT275W2.mjs").then((m) => m.CreateMemberComponent),
        data: {
          title: "New Member"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-members.component-UTZSSD4E.mjs").then((m) => m.UpdateMembersComponent),
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
//# sourceMappingURL=routes-R7O7PUB4.mjs.map
