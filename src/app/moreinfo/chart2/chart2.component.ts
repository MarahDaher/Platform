import { Chart } from 'chart.js';
import { Component, Input, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit , OnChanges {
@ViewChild('bar' , {static: true}) bar: ElementRef;
@Input() chartInps2;
@Input() titlechar;
chart2 = [];

  constructor() { }
  ngOnChanges() {

    if(this.chartInps2 != ''){
    console.log(this.chartInps2);
    console.log(this.titlechar);
    //column
    this.chart2 = new Chart(this.bar.nativeElement.getContext('2d') , {
      type: 'bar',
      data: {
        labels:['Bar Charts'],
        datasets: [{

          data: [this.chartInps2[0]],
          backgroundColor: "#496F5D",
          label: this.titlechar[0]
        },{
          data: [this.chartInps2[1]],
          backgroundColor:"#4C9F70",
          label: this.titlechar[1]

        },{
          data: [this.chartInps2[2]],
          backgroundColor: "#031926",
          label: this.titlechar[2]
        }],
      },
      options: {
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }],
            yAxes: [{
              ticks: {
                  beginAtZero: true,
                  steps: 10,
                  stepValue: 6,
                  max: 100 //max value for the chart is 60
                  }
              }]
        }
      }
    });
  }
  }
  ngOnInit() {}

}
