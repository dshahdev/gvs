export class solrUrl {
    ipAddress: number;
    port: number;
    solr_core_name: string;
    rows:number;
    start_row: number;
    queryText:string;

    url: string;
    
    FS = "/";
    AMP = "&";
    ROOT = "solr";
    SELECT = "select?indent=on&wt=json";
    AMPQ = this.AMP + "q=";
    AMPSTART = this.AMP + "start=";
    AMPROWS = this.AMP + "rows=";
}