import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import {DataTableModule} from "angular2-datatable";


import { AppComponent }       from './app.component';
import { MainComponent }      from './main/main.component';
import { SolrComponent }      from './solr/solr.component';
import { SharedService }        from  './shared.service';

import { TradeDataComponent } from  './trade/tradeData.component';

@NgModule({
  imports:      [ BrowserModule , HttpModule, FormsModule,DataTableModule],
  declarations: [ AppComponent, MainComponent, SolrComponent,TradeDataComponent ],
  providers:    [SharedService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
