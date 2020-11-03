import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './../data.service';
@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent implements OnInit {
@Input() id;
response;
clickItem = 'pie';
Data = [];
Title = [];
@Input() datastatus2 = false;
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.id != undefined) {
    this.data.getDetails(this.id).subscribe(result => {
      this.response = result;
      this.Data = [];
      this.Title =[];

      this.response.Ratings.forEach( rating => {
      let title = rating.Source;
      let ratingvalue = Number(rating.Value.slice(0, rating.Value.search("/")));
      this.Data.push(ratingvalue);
      this.Title.push(title);
      });
      this.Data[0] = this.Data[0] * 10;
    });
    }
  }

  onChangeStatus(value){
    this.clickItem = value ;

  }
}
