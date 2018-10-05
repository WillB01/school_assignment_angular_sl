import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiClass } from './search/ApiClass';
import { Component, OnInit, Output, Input , EventEmitter } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
    this.myApi = new ApiClass();
   }

   @Output() change: EventEmitter<any> = new EventEmitter();
   @Output() depatureEmitter: EventEmitter<any> = new EventEmitter();

  myApi: ApiClass;
  station: IUserResponse;
  depature: IUserResponseDepature;
  hideEverything = false;


  // Get Stations
  public getStationsHttp(term): any {
      this.http.get<IUserResponse>
      (this.myApi.search(term)).subscribe(data => {

       for (const item of data.StopLocation) {
         if (item.id === '' || !item.name.toLocaleLowerCase().substr(term.toLocaleLowerCase())) {
          console.log('error');
          return null;
         }
       }
        this.station = data;
        this.change.emit(this.station.StopLocation);
        console.log('get stations');
      }, error => console.log('oops', error));
  }

  public getArrayStations() {
    return this.station;
  }

  // Get Depatures
  public getDepatureHttp(id): any {
      this.http.get<IUserResponseDepature>
      (this.myApi.searchDepatures(id)).subscribe(data => {
        this.depature = data;
        this.depatureEmitter.emit(data.Departure);
        console.log('get depatures');
      }, error => console.log('oops', error));
  }

  public clearEverything() {
    this.station.StopLocation = [];
    this.depature.Departure = [];
    this.change.emit(this.station);
    this.depatureEmitter.emit(this.depature);
  }




}
