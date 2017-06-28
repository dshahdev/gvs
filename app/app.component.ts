import { Component }        from '@angular/core';

import { SharedService }      from './shared.service';
import { SolrComponent }      from './solr/solr.component';
import { TradeDataComponent } from './trade/tradeData.component';


@Component({
  selector: 'my-app',
  template: `
              <my-main></my-main>
              <solr-form></solr-form>
              <my-trade></my-trade>`
})
export class AppComponent { 
  
}
