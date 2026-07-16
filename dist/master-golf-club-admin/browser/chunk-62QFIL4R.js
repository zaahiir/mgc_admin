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

// src/app/views/common-service/amenities/amenities.service.ts
var _AmenitiesService = class _AmenitiesService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.lists = this.apiUrl + "amenities/0/listing/";
    this.processing = this.apiUrl + "amenities/0/processing/";
    this.deletion = this.apiUrl + "amenities/0/deletion/";
  }
  listAmenities(id = "0") {
    return axios_default.get(this.lists.replace("0", id));
  }
  processAmenities(data, id = "0") {
    return axios_default.post(this.processing.replace("0", id), data);
  }
  /**
   * Process amenities with SVG icon data
   * @param data - Object containing amenity data with SVG content
   * @param id - Amenity ID (0 for new, actual ID for update)
   */
  processAmenitiesWithSVG(data, id = "0") {
    return axios_default.post(this.processing.replace("0", id), data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  deleteAmenities(id) {
    return axios_default.get(this.deletion.replace("0", id));
  }
  /**
   * Get all amenities for frontend consumption
   */
  getAllAmenities() {
    return axios_default.get(this.apiUrl + "amenities/0/listing/");
  }
};
_AmenitiesService.\u0275fac = function AmenitiesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AmenitiesService)();
};
_AmenitiesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AmenitiesService, factory: _AmenitiesService.\u0275fac, providedIn: "root" });
var AmenitiesService = _AmenitiesService;

export {
  AmenitiesService
};
//# sourceMappingURL=chunk-62QFIL4R.js.map
