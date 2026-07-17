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
        loadComponent: () => import("./list-members.component-QLGVIRX4.mjs").then((m) => m.ListMembersComponent),
        data: {
          title: "List Members"
        }
      },
      {
        path: "add",
        loadComponent: () => import("./create-members.component-O7YMXUKZ.mjs").then((m) => m.CreateMemberComponent),
        data: {
          title: "New Member"
        }
      },
      {
        path: "update/:id",
        loadComponent: () => import("./update-members.component-YEPO7BI4.mjs").then((m) => m.UpdateMembersComponent),
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
//# sourceMappingURL=routes-NTUDAGI4.mjs.map
