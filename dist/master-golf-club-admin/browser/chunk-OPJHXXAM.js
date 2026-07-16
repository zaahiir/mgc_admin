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

// src/app/views/common-service/concept/concept.service.ts
var _ConceptService = class _ConceptService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
  }
  // Get concept data
  getConcept() {
    return axios_default.get(`${this.apiUrl}concept/get_concept/`);
  }
  // List concept (alias for getConcept for backward compatibility)
  listConcept() {
    return this.getConcept();
  }
  // Create or Update concept
  createOrUpdateConcept(data) {
    return axios_default.post(`${this.apiUrl}concept/create_or_update_concept/`, data);
  }
  // Process concept (alias for createOrUpdateConcept for backward compatibility)
  processConcept(data) {
    return this.createOrUpdateConcept(data);
  }
  // Delete entire concept
  deleteConcept() {
    return axios_default.delete(`${this.apiUrl}concept/delete_concept/`);
  }
  // Delete specific concept item
  deleteConceptItem(itemId) {
    return axios_default.delete(`${this.apiUrl}concept/1/delete_item/`, {
      data: { item_id: itemId }
    });
  }
};
_ConceptService.\u0275fac = function ConceptService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConceptService)();
};
_ConceptService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConceptService, factory: _ConceptService.\u0275fac, providedIn: "root" });
var ConceptService = _ConceptService;

export {
  ConceptService
};
//# sourceMappingURL=chunk-OPJHXXAM.js.map
