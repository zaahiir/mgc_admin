import "./chunk-ZDRA4OZL.js";

// src/app/views/enquiry/routes.ts
var enquiryRoutes = [
  {
    path: "",
    data: {
      title: "Enquiries"
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./enquiry.component-I5TTPJG3.js").then((m) => m.EnquiryComponent),
        data: {
          title: "List Enquiries"
        }
      }
    ]
  }
];
export {
  enquiryRoutes
};
//# sourceMappingURL=routes-YJGUQJGU.js.map
