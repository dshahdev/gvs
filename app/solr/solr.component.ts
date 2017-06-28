import { Component, OnInit }        from '@angular/core';
import { SharedService }    from '../shared.service';
import { solrUrl } from "./solrUrl";

@Component({
    selector: 'solr-form',
    templateUrl: `app/solr/solrform.component.html`,
    styleUrls: ['app/solr/solr.component.css']
    
    
})

export class SolrComponent implements OnInit {
    text:string = "";
    url:solrUrl = new solrUrl();
    start:number = 0;
    numRows: number = 10;
    constructor(private sharedService: SharedService) {}



// address:string, pt: number,  dbName: string, 
//                 rw: number, srow:number, qText:string

    onSearch(searchText:string){
        this.text = searchText;

        console.log("submit is clicked" + searchText);
        
        this.url.buildURL("10.0.1.22",8983,"gdata",this.numRows,this.start,searchText);
        // this.url="http://10.0.1.22:8983/solr/gdata/select?indent=on&q=flange%20AND%20mumbai%20AND%20CHINA&rows=100&start=50&wt=json";
        console.log(this.url.getFinalUrl());
        
        this.sharedService.setUrl(this.url.getFinalUrl());
      
    }
    

    ngOnInit(){
        this.sharedService.getStartRow().subscribe((num:number) => {
            this.start = num;
            this.url.buildURL("10.0.1.22",8983,"gdata",this.numRows,this.start,this.text);  
            this.sharedService.setUrl(this.url.getFinalUrl());
        })   
    }
}