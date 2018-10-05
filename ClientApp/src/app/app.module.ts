import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PrintComponent } from './print/print.component';
import { DepatureComponent } from './depature/depature.component';
import { StationsComponent } from './stations/stations.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PrintComponent,
    DepatureComponent,
    StationsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
