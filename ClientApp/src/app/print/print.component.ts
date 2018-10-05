import { Component, OnInit, Input, ViewChild, AfterViewInit, EventEmitter, Output, TypeDecorator } from '@angular/core';
import { ApiClass } from '../search/ApiClass';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent {
  @Output() dataEvent = new EventEmitter<string>();
  // @Output() depatureEvent = new EventEmitter<string>();
  constructor(private search: SearchService) {

  }

  stations: IUserResponse;
  depatures: IUserResponseDepature;

  test() {
    // console.log(this.search.getArrayStations);
  }
  // api: ApiClass;
  // SiteId: string;
  // Destination: string;

  // receiveStations($event) {
  //   this.stations = $event.ResponseData;
  // }

  // receiveDepatures($event) {
  //   this.depatures = $event.ResponseData;
  //   alert(this.depatures);
  // }

  // getId($event) {
  //   this.SiteId = $event;
  // }
  // getDepature($event) {
  //   this.Destination = $event;
  //   alert( this.Destination + ' kewl');

  // }



}
