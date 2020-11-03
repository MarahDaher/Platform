import { DataService } from './data.service';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
response: any = [];
status = false ;
yearArray = [];
@ViewChild('InputSearchValue', { static: true }) InputSearchValue: ElementRef;
@ViewChild('InputYearValue', { static: true }) InputYearValue: ElementRef;
@ViewChild('InputTypeValue', { static: true }) InputTypeValue: ElementRef;
  constructor(private data: DataService) {}

  ngOnInit() {
    for (let index = 2020; index > 1950; index--) {
      this.yearArray.push(index);
    }

  }
  ongetInfo() {
    let valueInput = this.InputSearchValue.nativeElement.value;
    let valueYear = this.InputYearValue.nativeElement.value;
    let valueType = this.InputTypeValue.nativeElement.value;
    if (/^ *$/.test(valueInput)) {
      alert('Please Input Films');
    } else {
      this.status = true ;
      return this.data.getData(valueInput.trim() , valueYear , valueType).subscribe(result => {
        this.response = result ;
      });
    }
  }
}
