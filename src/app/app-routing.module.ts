import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectFundComponent } from './select-fund/select-fund.component'
import { LoginComponent } from './login/login.component';
import { FundSummaryComponent } from './fund-summary/fund-summary.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FundPerformanceComponent } from './fund-performance/fund-performance.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'portal', component: SelectFundComponent },
  { path: 'fundSummary/:id', component: FundSummaryComponent },
  { path: 'fundPerformance/:id/:idPerf', component: FundPerformanceComponent },
  { path: 'fileManager/:id', component: FileManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
