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

// src/app/views/common-service/course/course.service.ts
var _CourseService = class _CourseService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.lists = this.apiUrl + "course/0/listing/";
    this.processing = this.apiUrl + "course/0/processing/";
    this.deletion = this.apiUrl + "course/0/deletion/";
    this.collectionLists = this.apiUrl + "collection/list_courses/";
    this.courseDetail = this.apiUrl + "collection/0/course_detail/";
    this.searchCoursesUrl = this.apiUrl + "collection/search/";
    this.amenitiesLists = this.apiUrl + "amenities/0/listing/";
    this.amenitiesProcessing = this.apiUrl + "amenities/0/processing/";
    this.amenitiesDeletion = this.apiUrl + "amenities/0/deletion/";
    this.collectionAmenities = this.apiUrl + "amenities/collection_amenities/";
    this.teeLists = this.apiUrl + "tee/0/listing/";
    this.teeProcessing = this.apiUrl + "tee/0/processing/";
    this.teeDeletion = this.apiUrl + "tee/0/deletion/";
  }
  // Course Management Methods (Admin)
  listCourse(id = "0") {
    return axios_default.get(this.lists.replace("0", id));
  }
  processCourse(data, id = "0") {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    return axios_default.post(this.processing.replace("0", id), data, config);
  }
  deleteCourse(id) {
    return axios_default.get(this.deletion.replace("0", id));
  }
  // Collection Methods (Frontend)
  getCollectionData(legacy = false) {
    const params = legacy ? "?legacy=true" : "";
    return axios_default.get(`${this.collectionLists}${params}`);
  }
  getCourseDetail(id) {
    return axios_default.get(this.courseDetail.replace("0", id));
  }
  searchCoursesCollection(params) {
    const queryParams = new URLSearchParams();
    if (params.q)
      queryParams.append("q", params.q);
    if (params.location)
      queryParams.append("location", params.location);
    if (params.amenities && params.amenities.length > 0) {
      params.amenities.forEach((id) => queryParams.append("amenities[]", id.toString()));
    }
    if (params.legacy)
      queryParams.append("legacy", "true");
    return axios_default.get(`${this.searchCoursesUrl}?${queryParams.toString()}`);
  }
  // Amenities Management Methods
  listAmenities(id = "0") {
    return axios_default.get(this.amenitiesLists.replace("0", id));
  }
  processAmenities(data, id = "0") {
    return axios_default.post(this.amenitiesProcessing.replace("0", id), data);
  }
  deleteAmenities(id) {
    return axios_default.get(this.amenitiesDeletion.replace("0", id));
  }
  // Get amenities formatted for collection component
  getAmenities() {
    return axios_default.get(this.collectionAmenities);
  }
  // Tee Management Methods
  listTees(id = "0", courseId) {
    let url = this.teeLists.replace("0", id);
    if (courseId) {
      url += `?course_id=${courseId}`;
    }
    return axios_default.get(url);
  }
  processTee(data, id = "0") {
    return axios_default.post(this.teeProcessing.replace("0", id), data);
  }
  deleteTee(id) {
    return axios_default.get(this.teeDeletion.replace("0", id));
  }
  getTeesByCourse(courseId) {
    return axios_default.get(`${this.apiUrl}tee/by_course/?course_id=${courseId}`);
  }
  // Convenience Methods
  getCourse(id) {
    return this.listCourse(id);
  }
  getAllCourses() {
    return this.listCourse("0");
  }
  getAllAmenities() {
    return this.listAmenities("0");
  }
  // Legacy method names for backward compatibility
  getCollectionCourses(legacy = false) {
    return this.getCollectionData(legacy);
  }
  searchCourses(params) {
    return this.searchCoursesCollection(params);
  }
  // Convenience methods for tees
  getAllTees() {
    return this.listTees("0");
  }
  getTee(id) {
    return this.listTees(id);
  }
};
_CourseService.\u0275fac = function CourseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CourseService)();
};
_CourseService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CourseService, factory: _CourseService.\u0275fac, providedIn: "root" });
var CourseService = _CourseService;

export {
  CourseService
};
//# sourceMappingURL=chunk-672NKZHA.mjs.map
