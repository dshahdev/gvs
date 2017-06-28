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
var shared_service_1 = require("../shared.service");
var solrUrl_1 = require("./solrUrl");
var SolrComponent = (function () {
    function SolrComponent(sharedService) {
        this.sharedService = sharedService;
        this.text = "";
        this.url = new solrUrl_1.solrUrl();
        this.start = 0;
        this.numRows = 10;
    }
    // address:string, pt: number,  dbName: string, 
    //                 rw: number, srow:number, qText:string
    SolrComponent.prototype.onSearch = function (searchText) {
        this.text = searchText;
        console.log("submit is clicked" + searchText);
        this.url.buildURL("10.0.1.22", 8983, "gdata", this.numRows, this.start, searchText);
        // this.url="http://10.0.1.22:8983/solr/gdata/select?indent=on&q=flange%20AND%20mumbai%20AND%20CHINA&rows=100&start=50&wt=json";
        console.log(this.url.getFinalUrl());
        this.sharedService.setUrl(this.url.getFinalUrl());
    };
    SolrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getStartRow().subscribe(function (num) {
            _this.start = num;
            _this.url.buildURL("10.0.1.22", 8983, "gdata", _this.numRows, _this.start, _this.text);
            _this.sharedService.setUrl(_this.url.getFinalUrl());
        });
    };
    return SolrComponent;
}());
SolrComponent = __decorate([
    core_1.Component({
        selector: 'solr-form',
        templateUrl: "app/solr/solrform.component.html",
        styleUrls: ['app/solr/solr.component.css']
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], SolrComponent);
exports.SolrComponent = SolrComponent;
//# sourceMappingURL=solr.component.js.map