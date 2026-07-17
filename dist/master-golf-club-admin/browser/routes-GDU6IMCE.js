import "./chunk-ZDRA4OZL.js";

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
        loadComponent: () => import("./member-enquiry.component-IQ3ULAD4.js").then((m) => m.MemberEnquiryComponent),
        data: {
          title: "List Member Enquiries"
        }
      },
      {
        path: "addMember",
        loadComponent: () => import("./update-member-enquiry.component-FTKGALF3.js").then((m) => m.UpdateMemberEnquiryComponent),
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
//# sourceMappingURL=routes-GDU6IMCE.js.map
