import './polyfills.server.mjs';
import "./chunk-CKH4O4N6.mjs";

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
        loadComponent: () => import("./enquiry.component-F2SI6UN2.mjs").then((m) => m.EnquiryComponent),
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
//# sourceMappingURL=routes-BFYJKOSJ.mjs.map
