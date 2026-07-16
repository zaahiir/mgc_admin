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

// src/app/views/common-service/plan/plan.service.ts
var _PlanService = class _PlanService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.lists = this.apiUrl + "plan/0/listing/";
    this.processing = this.apiUrl + "plan/0/processing/";
    this.deletion = this.apiUrl + "plan/0/deletion/";
  }
  listPlan(id = "0") {
    return axios_default.get(this.lists.replace("0", id));
  }
  processPlan(data, id = "0") {
    return axios_default.post(this.processing.replace("0", id), data);
  }
  deletePlan(id) {
    return axios_default.get(this.deletion.replace("0", id));
  }
  // Plan Features Methods
  getPlanFeatures(planId) {
    return axios_default.get(this.apiUrl + `planFeature/${planId}/listing/`);
  }
  createPlanFeature(data) {
    return axios_default.post(this.apiUrl + "planFeature/0/processing/", data);
  }
  updatePlanFeature(featureId, data) {
    return axios_default.post(this.apiUrl + `planFeature/${featureId}/processing/`, data);
  }
  deletePlanFeature(featureId) {
    return axios_default.get(this.apiUrl + `planFeature/${featureId}/deletion/`);
  }
};
_PlanService.\u0275fac = function PlanService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlanService)();
};
_PlanService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlanService, factory: _PlanService.\u0275fac, providedIn: "root" });
var PlanService = _PlanService;

export {
  PlanService
};
//# sourceMappingURL=chunk-WRN2RFTQ.mjs.map
