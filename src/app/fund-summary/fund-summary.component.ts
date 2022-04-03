import { Component, OnInit } from '@angular/core';
import { FundService } from '../services/fund.service'
import { FundGroupModel, FundReport } from '../model/fund-model'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ChartType } from 'angular-google-charts'
@Component({
  selector: 'app-fund-summary',
  templateUrl: './fund-summary.component.html',
  styleUrls: ['./fund-summary.component.css']
})
export class FundSummaryComponent implements OnInit {
  options = {
    legend: {position: 'top', maxLines: 3},
    hAxis: {
      title: ''
    },
    vAxis: {
      minValue: 0
    },
    isStacked: true,
    colors:['#fff','#8888aa','#666699']
  }
  chartType = ChartType.ColumnChart
  data = [
    ["2012", 0, 0, 0]
  ]
  title = ''
  itemNames = ['Value','','','']
  width = 550
  height = 400
  aFund:FundGroupModel = new FundGroupModel()

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fundService: FundService) { }
  getFundData(id: string): void {
    this.fundService.getFundById(id).subscribe(data => {
      this.itemNames = ['Value','']
      data.PerfReports.forEach(T => this.itemNames.push(T.Name))
      this.aFund = data;
      this.data.splice(0);
      var addData = (detail:string,cb:(fr:FundReport)=>number,cb2:(fr:FundReport)=>number)=> {
        var datas = [];
        datas.push(detail)
        datas.push(cb2(data.PerfReports[0]))
        data.PerfReports.forEach(T => {
          datas.push(cb(T))
        })
        this.data.push(datas)
      }
      addData("Contribute",(fr:FundReport)=>{
        return fr.G_Con;
      },(fr:FundReport)=>fr.G_Con_M);
      addData("Distribution",(fr:FundReport)=>{
        return fr.G_Dis;
      },(fr:FundReport)=>fr.G_Dis_M);
      addData("NAV",(fr:FundReport)=>{
        return fr.G_NAV;
      },(fr:FundReport)=>fr.G_NAV_M);
      addData("Total Value",(fr:FundReport)=>{
        return fr.G_TOT;
      },(fr:FundReport)=>fr.G_TOT_M);
     

    })
  }
  ngOnInit(): void {
    setTimeout(()=>{
    var id = this.route.snapshot.paramMap.get("id") ?? '';
    this.getFundData(id);
    },100);
  }

  transformValue(v:number):number{
    return Math.abs(v)
  }

}
