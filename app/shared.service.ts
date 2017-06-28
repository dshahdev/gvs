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

    private subject: Subject<string> = new Subject<string>();

    private resSubject : Subject<SolrResponse> = new Subject<SolrResponse>();

    private setStSubject: Subject<number> = new Subject<number>();


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

    setTradeData(tData: SolrResponse):any {
       
        this.resSubject.next(tData);
        
    }

    getTradeData(): Observable<SolrResponse> {

        return this.resSubject.asObservable();
    }

    setStartRow(newRow:number){
        this.newRow = newRow;
        this.setStSubject.next(newRow);
    }
    
    getStartRow(): Observable<number> {
        return this.setStSubject.asObservable();
    }

    
}