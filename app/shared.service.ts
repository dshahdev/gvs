import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';
import { Subject }          from 'rxjs/Subject';
import { Observable }       from 'rxjs/Observable';
import { SolrResponse }     from './solr/solrResponse';

// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';

@Injectable()

export class SharedService {
    private url:string;
    private newRow: number;
    private pages: number;
    private totalCounts:number;

    private subject: Subject<string> = new Subject<string>();

    private resSubject : Subject<SolrResponse> = new Subject<SolrResponse>();

    private setStSubject: Subject<number> = new Subject<number>();

    private pageSubject: Subject<number> = new Subject<number>();

    private headers = new Headers({'Content-Type': 'application/json'});

    private tradeData: SolrResponse;

    constructor(private http: Http){}

    getData(url:string):Promise<SolrResponse> {
        return this.http.get(url)
                .toPromise()
                .then(response => this.setTradeData(response.json() as SolrResponse))
                .catch(this.handleError);
        
    }
    

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    setUrl(newUrl: string):void {
        this.url = newUrl;
        this.subject.next(newUrl);
        this.getData(this.url);
    }

    getUrl():string {
        
        return this.url;
    }

    setTradeData(tData: SolrResponse):any {
       
        this.resSubject.next(tData);    
    }

    getTradeData(): Observable<SolrResponse> {
        
        return this.resSubject.asObservable();
    }

    setStartRow(newStart:number):number{
        this.newRow = newStart;
        this.setStSubject.next(newStart);
        return this.newRow;
    }

    getStartRow(): Observable<number> {
        return this.setStSubject.asObservable();
    }

    setPages(newPage:number, totalCounts: number):void{ 
            this.pages = newPage;
            this.totalCounts = totalCounts;
            this.pageSubject.next(newPage);
            console.log("in set page: "+ this.pages + " and totalcounts are: "+totalCounts);
    }

    getPages():Observable<number>{
        console.log("sending set page: "+ this.pages)
        return this.pageSubject.asObservable();
    }
    
}