"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Subject_1 = require("rxjs/Subject");
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';
var SharedService = (function () {
    function SharedService(http) {
        this.http = http;
        this.subject = new Subject_1.Subject();
        this.resSubject = new Subject_1.Subject();
        this.setStSubject = new Subject_1.Subject();
        this.pageSubject = new Subject_1.Subject();
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    SharedService.prototype.getData = function (url) {
        var _this = this;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return _this.setTradeData(response.json()); })
            .catch(this.handleError);
    };
    SharedService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SharedService.prototype.setUrl = function (newUrl) {
        this.url = newUrl;
        this.subject.next(newUrl);
        this.getData(this.url);
    };
    SharedService.prototype.getUrl = function () {
        return this.url;
    };
    SharedService.prototype.setTradeData = function (tData) {
        this.resSubject.next(tData);
    };
    SharedService.prototype.getTradeData = function () {
        return this.resSubject.asObservable();
    };
    SharedService.prototype.setStartRow = function (newStart) {
        this.newRow = newStart;
        this.setStSubject.next(newStart);
        return this.newRow;
    };
    SharedService.prototype.getStartRow = function () {
        return this.setStSubject.asObservable();
    };
    SharedService.prototype.setPages = function (newPage, totalCounts) {
        this.pages = newPage;
        this.totalCounts = totalCounts;
        this.pageSubject.next(newPage);
        console.log("in set page: " + this.pages + " and totalcounts are: " + totalCounts);
    };
    SharedService.prototype.getPages = function () {
        console.log("sending set page: " + this.pages);
        return this.pageSubject.asObservable();
    };
    return SharedService;
}());
SharedService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SharedService);
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map