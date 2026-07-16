// src/app/views/common-service/commom-api-url.ts
var BaseAPIUrl = class {
  // localUrl: string = "https://mastergolfclub.com/apis/"
  // stagingUrl: string = "https://mastergolfclub.com/apis/"
  // productionUrl: string = "https://mastergolfclub.com/apis/";
  constructor() {
    this.localUrl = "http://localhost/apis/";
    this.stagingUrl = "http://localhost/apis/";
    this.productionUrl = "http://localhost/apis/";
  }
  getUrl(urlType) {
    if (urlType == 1) {
      return this.localUrl;
    } else if (urlType == 2) {
      return this.stagingUrl;
    } else {
      return this.productionUrl;
    }
  }
};
var baseURLType = 3;

export {
  BaseAPIUrl,
  baseURLType
};
//# sourceMappingURL=chunk-AE67A222.js.map
