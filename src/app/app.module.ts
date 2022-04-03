import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectFundComponent } from './select-fund/select-fund.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { FundService } from './services/fund.service'
import { FundSummaryComponent } from './fund-summary/fund-summary.component';
import { FundPerformanceComponent } from './fund-performance/fund-performance.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { LayoutComponent } from './layout/layout.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgMaterialMultilevelMenuModule, MultilevelMenuService } from 'ng-material-multilevel-menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [
    AppComponent,
    SelectFundComponent,
    LoginComponent,
    FundSummaryComponent,
    FundPerformanceComponent,
    FileManagerComponent,
    LayoutComponent
  ],
  imports: [GoogleChartsModule,MatIconModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    NgMaterialMultilevelMenuModule,
    MatTreeModule
  ],
  providers: [LoginService, FundService, MultilevelMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
