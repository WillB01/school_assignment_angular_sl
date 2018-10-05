import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-depature',
  templateUrl: './depature.component.html',
  styleUrls: ['./depature.component.css']
})
export class DepatureComponent implements OnInit {

  constructor(private search: SearchService) { }
  depatures: any;
  public show = false;
  public showSP = false;
  public buttonName = 'Show';
  showFiltered = false;
  showOriginal = true;
  filteredDepatures = [];
  catogoryOfFilteredDepatures = [];
  test = [];
  sveralChecks = [];


  tbanaArr = [];
  bussArr = [];
  pendelArr = [];
  concatArr = [];

  toggle($event) {
    this.show = !this.show;
    if (this.show) {
      $event.currentTarget.nextSibling.classList.remove('hide');
    } else {
      $event.currentTarget.nextSibling.classList.add('hide');
    }
  }

  toggleFilter(event) {
    let catCode = '';

    if ( event.target.checked ) {
      this.showFiltered = true;
      this.showOriginal = false;

      for (let i = 0; i < this.depatures.length; i++) {
        this.filteredDepatures.push({
          'catCode' : this.depatures[i].Product.catCode,
          'name' : this.depatures[i].name,
          'direction': this.depatures[i].direction,
          'time': this.depatures[i].time,
          'stops': this.depatures[i].Stops
          });
        }

        if (event.currentTarget.name === 'tbana' && this.tbanaArr.length === 0) {
          catCode = '5';
        this.sveralChecks.push({
          'catCode' : '5',
          'name' : event.currentTarget.name
        });
        this.tbanaArr = this.filteredDepatures.filter(obj => obj.catCode === catCode);
      } else if (event.currentTarget.name === 'buss' && this.bussArr.length === 0) {
        catCode = '7';
        this.sveralChecks.push({
          'catCode' : '7',
          'name' : event.currentTarget.name
        });
        this.bussArr = this.filteredDepatures.filter(obj => obj.catCode === catCode);
      } else if (event.currentTarget.name === 'pendel' && this.pendelArr.length === 0) {
        catCode = '4';
        this.sveralChecks.push({
          'catCode' : '4',
          'name' : event.currentTarget.name
        });
        this.pendelArr = this.filteredDepatures.filter(obj => obj.catCode === catCode);
      }
        this.concatArr  = this.concatArr.concat(this.tbanaArr, this.bussArr, this.pendelArr);
        this.tbanaArr = [];
        this.bussArr = [];
        this.pendelArr = [];
        this.filteredDepatures = [];
   } else {
      const filter = this.sveralChecks.filter(obj => obj.name !== event.currentTarget.name);
      this.sveralChecks = filter;
      if (this.sveralChecks.length === 0) {
        this.showFiltered = false;
        this.showOriginal = true;
        this.filteredDepatures = [];
        this.catogoryOfFilteredDepatures = [];
        this.tbanaArr = [];
        this.bussArr = [];
        this.pendelArr = [];

      }
      if (event.currentTarget.name === 'tbana') {
        this.concatArr = this.concatArr.filter(obj => obj.catCode !== '5');
      } else if (event.currentTarget.name === 'buss') {
        this.concatArr = this.concatArr.filter(obj => obj.catCode !== '7');
      } else if (event.currentTarget.name === 'pendel') {
        this.concatArr = this.concatArr.filter(obj => obj.catCode !== '4');
      } else {
        this.concatArr = [];

      }
   }
}

  ngOnInit() {
    this.search.depatureEmitter.subscribe(dep => {
      this.depatures = dep;
    });
  }
}
