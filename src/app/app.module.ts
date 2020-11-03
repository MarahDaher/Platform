import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';
import { ChartComponent } from './moreinfo/chart/chart.component';
import { Chart2Component } from './moreinfo/chart2/chart2.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    MoreinfoComponent,
    ChartComponent,
    Chart2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
