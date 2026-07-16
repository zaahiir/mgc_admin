import {
  axios_default
} from "./chunk-EXN3ACQE.js";
import {
  BaseAPIUrl,
  baseURLType
} from "./chunk-AE67A222.js";
import {
  ɵɵdefineInjectable
} from "./chunk-WDQ2E3IC.js";
import {
  __async
} from "./chunk-ZDRA4OZL.js";

// src/app/views/common-service/memberEnquiry/member-enquiry.service.ts
var _MemberEnquiryService = class _MemberEnquiryService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
  }
  listMemberEnquiry(id = "0") {
    const url = `${this.apiUrl}memberEnquiry/listing/${id}/`;
    return axios_default.get(url);
  }
  processMemberEnquiry(data, id = "0") {
    const url = `${this.apiUrl}memberEnquiry/processing/${id}/`;
    return axios_default.post(url, data);
  }
  deleteMemberEnquiry(id) {
    const url = `${this.apiUrl}memberEnquiry/deletion/${id}/`;
    return axios_default.get(url);
  }
  // FIXED: Enhanced markEnquiryConverted method with better error handling and logging
  markEnquiryConverted(enquiryId, data) {
    return __async(this, null, function* () {
      try {
        const url = `${this.apiUrl}memberEnquiry/mark-converted/${enquiryId}/`;
        console.log("Making API call to mark enquiry as converted:");
        console.log("URL:", url);
        console.log("Data:", data);
        const response = yield axios_default.post(url, data, {
          timeout: 3e4,
          // 30 second timeout
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log("API Response:", response);
        console.log("Response status:", response.status);
        console.log("Response data:", response.data);
        return response;
      } catch (error) {
        console.error("Error in markEnquiryConverted service:", error);
        if (axios_default.isAxiosError(error)) {
          console.error("Axios error details:");
          console.error("Status:", error.response?.status);
          console.error("Status text:", error.response?.statusText);
          console.error("Response data:", error.response?.data);
          console.error("Request config:", error.config);
        }
        throw error;
      }
    });
  }
  getEnquiryById(enquiryId) {
    return __async(this, null, function* () {
      try {
        const url = `${this.apiUrl}memberEnquiry/listing/${enquiryId}/`;
        console.log("Getting enquiry by ID:", url);
        const response = yield axios_default.get(url, {
          timeout: 3e4
        });
        console.log("Get enquiry response:", response);
        return response;
      } catch (error) {
        console.error("Error getting enquiry by ID:", error);
        throw error;
      }
    });
  }
};
_MemberEnquiryService.\u0275fac = function MemberEnquiryService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MemberEnquiryService)();
};
_MemberEnquiryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MemberEnquiryService, factory: _MemberEnquiryService.\u0275fac, providedIn: "root" });
var MemberEnquiryService = _MemberEnquiryService;

export {
  MemberEnquiryService
};
//# sourceMappingURL=chunk-LB6TD52Y.js.map
