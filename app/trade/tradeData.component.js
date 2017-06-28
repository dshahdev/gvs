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
var TradeDataComponent = (function () {
    function TradeDataComponent(sharedService) {
        this.sharedService = sharedService;
        // private tradeUrl = "http://10.0.1.22:8983/solr/gdata/select?indent=on&q=flange%20AND%20mumbai%20AND%20CHINA&rows=100&start=50&wt=json";
        this.tradeUrl = "";
        this.set_start = 0;
    }
    ;
    TradeDataComponent.prototype.getData = function (url) {
        var _this = this;
        this.sharedService.getData(url)
            .then(function (response) { return _this.tradeData = response; });
    };
    TradeDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getTradeData().subscribe(function (data) {
            _this.tradeData = data;
        });
    };
    TradeDataComponent.prototype.onNext = function () {
        console.log("Next button is clicked");
        this.set_start = 10;
        this.sharedService.setStartRow(this.set_start);
    };
    TradeDataComponent.prototype.onPrev = function () {
    };
    return TradeDataComponent;
}());
TradeDataComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-trade',
        templateUrl: "./tradeData.component.html",
        styleUrls: ['./tradeData.component.css']
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], TradeDataComponent);
exports.TradeDataComponent = TradeDataComponent;
//# sourceMappingURL=tradeData.component.js.map