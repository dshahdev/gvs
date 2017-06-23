import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';

import { SolrResponse }     from './solr/solrResponse';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()

export class SharedService {
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
}