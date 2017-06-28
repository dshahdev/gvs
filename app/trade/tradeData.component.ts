import { Component, OnInit }          from '@angular/core';

import { SharedService }      from '../shared.service';
import { SolrResponse }      from '../solr/solrResponse';
import { solrUrl } from "../solr/solrUrl";

@Component({
    moduleId: module.id,
    selector: 'my-trade',
    templateUrl: `./tradeData.component.html`,
    styleUrls: ['./tradeData.component.css']
})

export class TradeDataComponent implements OnInit {
    
    tradeData: SolrResponse;
    // private tradeUrl = "http://10.0.1.22:8983/solr/gdata/select?indent=on&q=flange%20AND%20mumbai%20AND%20CHINA&rows=100&start=50&wt=json";

    private tradeUrl = "";
    private solrUrl: solrUrl;
    private set_start:number = 0;

    constructor(private sharedService: SharedService){};
    
    getData(url:string):void{
        this.sharedService.getData(url)
            .then(response => this.tradeData = response);
    }

    ngOnInit(){
        this.sharedService.getTradeData().subscribe((data:SolrResponse) => {
            this.tradeData = data;

        })   
    }

    onNext(){

        console.log("Next button is clicked"); 
        this.set_start = 10;
        this.sharedService.setStartRow(this.set_start);
    }

    onPrev(){

    }
}