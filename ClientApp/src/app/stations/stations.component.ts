import { Component, OnInit, Output, Input , EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  constructor(private search: SearchService) {
   }

  stations: any;
  id: string;
  myChild = 'nej';
  @Input() showMePartially: boolean;

 getId(id) {
   this.id = id;
    this.getDepatures(id);
 }

 getDepatures(id) {
   this.search.getDepatureHttp(id);
 }

  ngOnInit() {
    this.search.change.subscribe(stop => {
      this.stations = stop;
      // console.log(this.stations);
    });
  }

}
