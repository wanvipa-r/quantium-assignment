import { Component, OnInit } from '@angular/core';
import { FundService } from '../services/fund.service'
import { FundGroupModel,FundReport} from '../model/fund-model'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-select-fund',
  templateUrl: './select-fund.component.html',
  styleUrls: ['./select-fund.component.css']
})
export class SelectFundComponent implements OnInit {
  fundDatas: FundGroupModel[] = []
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fundService: FundService) { }

  ngOnInit(): void {
    this.getFundData();
  }
  getFundData(): void {
    this.fundService.getFundList().subscribe(datas => {
      this.fundDatas = datas;
    })
  }
  nav(Id: number): void {
    this.router.navigate(['fundSummary/'+Id]);
  }  
  navDetail(Id: number,reportId:string): void {
    this.router.navigate(['fundPerformance/'+Id+'/'+reportId]);
  }


}
