import { DataService } from './../../data.service';
import { Chart } from 'chart.js';
import { Component, Input, OnChanges , ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements  OnChanges {
@ViewChild('pie' , {static: true}) pie: ElementRef;
//@ViewChild('bar' , {static: true}) bar: ElementRef;
@Input() chartInps;
//@Input() chartInps2;
chart = [];
  constructor(private data: DataService) { }

  ngOnChanges() {
    console.log(this.chartInps);
    //pie
    this.chart = new Chart(this.pie.nativeElement.getContext('2d') , {
      type: 'pie',
      data: {
        labels:['Good'],
        datasets: [{
          data: [this.chartInps, 100-this.chartInps],
          backgroundColor: ["#496F5D", "#4C9F70"],
        }],
      },
      options:   {
        responsive: true,
      }

    });


  }

}
