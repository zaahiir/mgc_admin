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
        loadComponent: () => import("./enquiry.component-DPZZPSAO.js").then((m) => m.EnquiryComponent),
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
//# sourceMappingURL=routes-VHIUFZIM.js.map
