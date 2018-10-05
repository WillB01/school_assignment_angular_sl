export class ApiClass {
  // SEARCH_KEY = 'd78fd5ebc1fc40ba97ff57b2a927a5bf';
  SEARCH_KEY = '866595ff-a5c6-481b-8aca-4a055fb19824';
  REALTIME_KEY = 'd90842cf-a47f-4d3d-a7c0-8a9243ff1ea4';
  id: string;


  // searchStops(term) {
  //   return 'http://api.sl.se/api2/typeahead.json?key=' + this.SEARCH_KEY + '&searchstring=' + term + '&stationsonly=True&maxresults=10';

  // }
    searchStops(term) {
      return 'https://api.resrobot.se/v2/location.name?key=' + this.SEARCH_KEY + '&input=' + term + '&format=json' ;
    }
    // searchDepatures(id) {
    //   return 'https://api.resrobot.se/v2/departureBoard?key=' + this.REALTIME_KEY + '&id=' + id + '&maxJourneys=10&format=json';
    // }

    search(term) {
      return `api/search/${term}`;
    }
    searchDepatures(siteId) {
      return `api/realtime/${siteId}`;
    }

    searchLocal() {
      return 'api/searchlocal';
    }

    depatureLocal() {
      return 'api/departureslocal';
    }

    stopsLocal() {
      return 'api/stopslocal';
    }
}
