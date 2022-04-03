import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FundService } from '../services/fund.service'
import { FundGroupModel, FundReport } from '../model/fund-model'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ChartType, GoogleChartComponent } from 'angular-google-charts'

@Component({
  selector: 'app-fund-performance',
  templateUrl: './fund-performance.component.html',
  styleUrls: ['./fund-performance.component.css']
})
export class FundPerformanceComponent implements OnInit {
  report: FundReport = new FundReport();

  o1 = {
    options: {
      pieHole: 0.4,
      pieSliceText: 'value',
      legend:{
        position:'right'
      }
    },
    chartType: ChartType.PieChart,
    title: '',
    itemNames: ['Value', ''],
    width: 400,
    height: 300,
  }
  o2 = {
    options: {
      pieHole: 0.4,
      pieSliceText: 'value',
      legend:{
        position:'bottom'
      },
      pointSize:3,
      vAxis:{
        title:'USD (M)'
      }
    },
    chartType: ChartType.LineChart,
    title: '',
    itemNames: ["Quarter", "Cumulative investment cost", "Cumulative total value"],
    width: 600,
    height: 300
  }

  o1data: any[] = []
  o2data: any[] = [['2020', 12, 13]
    , ['', 14, 15]
    , ['', 16, 17]
    , ['', 18, 19]
    , ['2020', 484, 490]
    , ['', 500, 540]
    , ['', 500, 540]
    , ['', 500, 540]
    , ['2021', 511, 512]
    , ['', 514, 522]
    , ['', 516, 544]
    , ['', 534, 566]
  ]

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fundService: FundService) { }

  getFundData(id: string, idPerf: string): void {

    this.fundService.getFundById(id).subscribe(data => {
      this.report = data.PerfReports.filter(t => idPerf == t.Id)[0];
      var newData: any[] = []
      this.report.Allocation.forEach(t => newData.push([t.Name, t.Val]))

      this.o1data = newData;

    })
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      var id = this.route.snapshot.paramMap.get("id") ?? '';
      var idPerf = this.route.snapshot.paramMap.get("idPerf") ?? '';
      this.getFundData(id, idPerf);
    });
    setTimeout(() => {

    }, 100);


  }
}
