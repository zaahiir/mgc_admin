import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

// src/app/views/memberEnquiry/routes.ts
var memberEnquiryRoutes = [
  {
    path: "",
    data: {
      title: "Member Enquiries"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./member-enquiry.component-YPJ4RVM4.mjs").then((m) => m.MemberEnquiryComponent),
        data: {
          title: "List Member Enquiries"
        }
      },
      {
        path: "addMember",
        loadComponent: () => import("./update-member-enquiry.component-LB3UNR2P.mjs").then((m) => m.UpdateMemberEnquiryComponent),
        data: {
          title: "Add Member"
        }
      }
    ]
  }
];
export {
  memberEnquiryRoutes
};
//# sourceMappingURL=routes-NXWXVICC.mjs.map
