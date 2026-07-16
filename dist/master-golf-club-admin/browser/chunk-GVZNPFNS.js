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

// src/app/views/common-service/member-events/member-events.service.ts
var _MemberEventsService = class _MemberEventsService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.lists = this.apiUrl + "event/0/listing/";
    this.processing = this.apiUrl + "event/0/processing/";
    this.deletion = this.apiUrl + "event/0/deletion/";
    this.activeEvents = this.apiUrl + "event/active_events/";
  }
  listEvent(id = "0") {
    return axios_default.get(this.lists.replace("0", id));
  }
  processEvent(data, id = "0") {
    return axios_default.post(this.processing.replace("0", id), data);
  }
  deleteEvent(id) {
    return axios_default.get(this.deletion.replace("0", id));
  }
  getActiveEvents() {
    return axios_default.get(this.activeEvents);
  }
};
_MemberEventsService.\u0275fac = function MemberEventsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MemberEventsService)();
};
_MemberEventsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MemberEventsService, factory: _MemberEventsService.\u0275fac, providedIn: "root" });
var MemberEventsService = _MemberEventsService;

export {
  MemberEventsService
};
//# sourceMappingURL=chunk-GVZNPFNS.js.map
