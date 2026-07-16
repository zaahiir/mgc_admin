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

// src/app/views/common-service/blog/blog.service.ts
var _BlogService = class _BlogService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.lists = this.apiUrl + "blog/0/listing/";
    this.processing = this.apiUrl + "blog/0/processing/";
    this.deletion = this.apiUrl + "blog/0/deletion/";
  }
  listBlog(id = "0") {
    return axios_default.get(this.lists.replace("0", id));
  }
  processBlog(data, id = "0") {
    return axios_default.post(this.processing.replace("0", id), data);
  }
  deleteBlog(id) {
    return axios_default.get(this.deletion.replace("0", id));
  }
};
_BlogService.\u0275fac = function BlogService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BlogService)();
};
_BlogService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BlogService, factory: _BlogService.\u0275fac, providedIn: "root" });
var BlogService = _BlogService;

export {
  BlogService
};
//# sourceMappingURL=chunk-3KRF5NP5.js.map
