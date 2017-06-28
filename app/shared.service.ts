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
    private subject: Subject<string> = new Subject<string>();

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){}

    getData(url:string):Promise<SolrResponse> {
        return this.http.get(url)
                .toPromise()
                .then(response => response.json() as SolrResponse)
                .catch(this.handleError);
        
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    setUrl(newUrl: string):void {
        this.url = newUrl;
        this.subject.next(newUrl);
    }

    getUrl(): Observable<string> {

        return this.subject.asObservable();
    }
}