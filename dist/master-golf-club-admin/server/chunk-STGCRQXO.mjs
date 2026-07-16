import './polyfills.server.mjs';
import {
  axios_default
} from "./chunk-KMHHOWHO.mjs";
import {
  BaseAPIUrl,
  baseURLType
} from "./chunk-R72VMWDM.mjs";
import {
  ɵɵdefineInjectable
} from "./chunk-J4TCKMJW.mjs";
import {
  __async
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/common-service/member/member.service.ts
var _MemberService = class _MemberService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.lists = this.apiUrl + "member/0/listing/";
    this.processing = this.apiUrl + "member/0/processing/";
    this.deletion = this.apiUrl + "member/0/deletion/";
    this.gender = this.apiUrl + "gender/";
    this.nationality = this.apiUrl + "country/";
    this.plan = this.apiUrl + "plan/";
  }
  listMember(id = "0") {
    return axios_default.get(this.lists.replace("0", id));
  }
  processMember(data, id = "0") {
    return axios_default.post(this.processing.replace("0", id), data);
  }
  deleteMember(id) {
    return axios_default.get(this.deletion.replace("0", id));
  }
  getGender() {
    return axios_default.get(this.gender);
  }
  getNationality() {
    return axios_default.get(this.nationality);
  }
  getPlan() {
    return axios_default.get(this.plan);
  }
  getLastMemberId(year, month) {
    return __async(this, null, function* () {
      try {
        const response = yield axios_default.get(`${this.apiUrl}member/last-member-id/${year}/${month}/`);
        return response.data?.data?.memberId || null;
      } catch (error) {
        console.error("Error fetching last member ID:", error);
        return null;
      }
    });
  }
  createSampleMembers() {
    return __async(this, null, function* () {
      try {
        const response = yield axios_default.post(`${this.apiUrl}member/create-sample-members/`);
        return response.data;
      } catch (error) {
        console.error("Error creating sample members:", error);
        throw error;
      }
    });
  }
};
_MemberService.\u0275fac = function MemberService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MemberService)();
};
_MemberService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MemberService, factory: _MemberService.\u0275fac, providedIn: "root" });
var MemberService = _MemberService;

export {
  MemberService
};
//# sourceMappingURL=chunk-STGCRQXO.mjs.map
