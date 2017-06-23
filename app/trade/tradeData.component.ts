import { Component, OnInit }          from '@angular/core';

import { SharedService }      from '../shared.service';
import { SolrResponse }      from '../solr/solrResponse';

@Component({
    moduleId: module.id,
    selector: 'my-trade',
    templateUrl: `./tradeData.component.html`,
    styleUrls: ['./tradeData.component.css']
})

export class TradeDataComponent {
    
    tradeData: SolrResponse;
    private tradeUrl = "http://10.0.1.22:8983/solr/gdata/select?indent=on&q=flange%20AND%20mumbai%20AND%20CHINA&rows=100&start=50&wt=json";

    constructor(private sharedService: SharedService){};

    getData(url:string):void{
        this.sharedService.getData(url)
            .then(response => this.tradeData = response);
    }

    ngOnInit(){
        console.log(this.getData(this.tradeUrl));
    }
}