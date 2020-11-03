import { DataService } from './../data.service';
import { Component, Input, OnInit, ViewChild ,ElementRef } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
@Input() InfoTable = {};
@Input() datastatus = false;
status2 =false;
show;
id;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.show =false;
  }

  onGetDetails(dtDetails) {
    this.id = dtDetails;
    this.status2 = true;
    this.show = true;
    return this.data.getDetails(dtDetails).subscribe(result => result);
  }

  ngOnChanges() {
    this.show = false;
  }
}
