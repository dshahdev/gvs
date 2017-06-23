"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var solrUrl = (function () {
    function solrUrl() {
        this.FS = "/";
        this.AMP = "&";
        this.ROOT = "solr";
        this.SELECT = "select?indent=on&wt=json";
        this.AMPQ = this.AMP + "q=";
        this.AMPSTART = this.AMP + "start=";
        this.AMPROWS = this.AMP + "rows=";
    }
    return solrUrl;
}());
exports.solrUrl = solrUrl;
//# sourceMappingURL=solrUrl.js.map