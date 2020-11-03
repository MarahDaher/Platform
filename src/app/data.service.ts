import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from '../../node_modules/rxjs/operators';
@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData(inputValue , yearValue , typeValue) {
    if ((typeValue == 'Select Type') && (yearValue == 'Select Year')){
      var apiUrl = 'http://www.omdbapi.com/?s=' + inputValue + '&apikey=48e1bad5';
    } else if ((typeValue == 'Select Type') && (yearValue !== 'Select Year')) {
      var apiUrl = 'http://www.omdbapi.com/?s=' + inputValue + '&apikey=48e1bad5' + '&y=' + yearValue;
    } else if ((typeValue !== 'Select Type') && (yearValue == 'Select Year')) {
      var apiUrl = 'http://www.omdbapi.com/?s=' + inputValue + '&apikey=48e1bad5' + '&type=' + typeValue;
    } else {
      var apiUrl = 'http://www.omdbapi.com/?s=' + inputValue + '&apikey=48e1bad5' +  '&y=' + yearValue + '&type=' + typeValue;
    }
   // var apiUrl = 'http://www.omdbapi.com/?s=' + inputValue + '&apikey=48e1bad5';
   //var apiUrl = 'http://www.omdbapi.com/?s=' + inputValue + '&apikey=48e1bad5' +yearValue='Select Year'?'&y=' + yearValue:'' //+typeValue=='Select Type'?'&type=' + typeValue:'';
    return this.http.get(apiUrl).pipe(map(result => result));
  }

  getDetails(inputDetails) {
    var apiUrl = 'http://www.omdbapi.com/?i=' + inputDetails + '&apikey=48e1bad5';
    return this.http.get(apiUrl).pipe(map(result => result));
  }
}
