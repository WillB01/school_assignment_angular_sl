// Ni ska skapa en webbapplikation m.h.a. ramverket angular där en användare anger en SL-hållplats i ett sökfält
// för att sedan presentera alla dess avgångar efter klockslaget sökningen sker på.
// Dvs nästa avgång(ar). Sökfältet ska bindas till en variabel m.h.a. ngModel.
// Det ska finnas en Sök-knapp för att söka på hållplats men användaren ska också söka genom att trycka på
// Enter när denne har textfältet aktivt/fokuserat.
// Sök-knappen ska vara avaktiverad tills användaren har fyllt i något i fältet. Sökfunktionaliteten ska ha en egen komponent.

// När ni gör anrop i angular-webapplikationen mot (lokala) api:et ska ni använda HttpClient och det ska göras i en separat tjänst.
// Ni ska använda minst två av SLs api-metoder. En för att hämta hållplatser (ResRobot Reseplanerare – Platsuppslag,
// som finnes via ResRobot Reseplanerare)
// och en för att visa avgångar för given hållplats (ResRobot – Stolptidtabeller 2).
// Projektmallen som ni använder för labben innehåller redan en kontroller-metod som anropar ”
// ResRobot Reseplanerare – Platsuppslag”. Projektmallen innehåller dessutom metoder som returnerar ”mockade” svar.


// Sökningen ska returnera en lista av hållplatser som matchar det användaren har skrivit fältet.
// Om den angivna hållplatsen inte finns så visa ingen lista.
// Listan ska använda sig av *ngFor. Annan angular funktionalitet som t.ex. *ngIf uppmuntras att använda.
// Användaren ska välja en av dessa hållplatser och sedan ska alla avgångar
// för den hållplatsen presenteras i en tabell. Varje avgång i tabellen ska presentera slutstation, klockslag och vilket fordon det gäller.
// Listan av hållplatser och tabellen ska göras
//  i antingen en egen komponent eller alternativt i flera komponenter.

// Tillhörande tabellen av avgångar ska det finnas alternativ för att filtrera listan på fordon (tåg, buss, pendel).
// Vid filtrering så ska avgångarna uppdateras direkt (dvs, man ska inte behöva söka på hållplatsen igen).

// Det ska finnas en möjlighet att rensa sökfältet och alla avgångar.

import { Component, OnInit, Output, EventEmitter, ViewChild  } from '@angular/core';

import { SearchService } from '../search.service';
import { StationsComponent } from '../stations/stations.component';


@Component({

  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent implements OnInit {
  constructor(private search: SearchService) {
    this.hide = search.hideEverything;
  }

  userSearch: string;
  isClicked = true;
  isClearNotActive = true;
  @Output() dataEvent = new EventEmitter<IUserResponse>();
  @Output() depatureEvent = new EventEmitter<IUserResponseDepature>();
  @ViewChild('myChild') private myChild: StationsComponent;
  hide: boolean;
  public show = true;
  showVar = false;
  toggleChild() {
    this.showVar = !this.showVar;
 }

  // send stations
  sendData(data) {
    this.dataEvent.emit(data);
  }

  // send depatures
  sendDepature(data) {
    this.depatureEvent.emit(data);
  }

  // get user input value
  private searchUserSearch(): void {

    this.search.getStationsHttp(this.userSearch);
    this.show = true;
    this.showVar = true;
    this.isClicked = false;
    this.isClearNotActive = false;
  }
  // get user input value from key ENTER
  private onKey(event): void {
    if (event.key === 'Backspace' && this.userSearch !== '') {
      this.clear();
    }
    this.userSearch.length <= 3 || this.userSearch === ' ' ? this.isClicked = true : this.isClicked = false;
    if (event.key === 'Enter' && !this.isClicked) {

     this.search.getStationsHttp(this.userSearch);
     this.showVar = true;
     this.show = true;
     this.isClearNotActive = false;
    }
  }

  private onFocus(event) {
   if (this.userSearch !== '') {
    this.clear();
   }
  }

  private clear() {
    this.show = !this.show;
    this.userSearch = '';
    this.isClicked = true;
    this.isClearNotActive = true;
    // this.search.clearEverything();
  }



  ngOnInit(): void {

  }
}

