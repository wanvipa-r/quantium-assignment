import { Component, OnInit } from '@angular/core';
import { FundService } from '../services/fund.service'
import { FundGroupModel,FundReport} from '../model/fund-model'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  appitems:any = appitems
  imgSrc: string = ''
  isClose:boolean = false
  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'my-custom-class',
    listBackgroundColor: `#fff`,
    fontColor: `#666`,
    //backgroundColor: `rgb(208, 241, 239)`,
    selectedListFontColor: `#339`,
    highlightOnSelect: true,
    collapseOnSelect: false,
    useDividers: false,
    rtlLayout: false
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fundService: FundService
  ) { }
  selectedItem(item: any) {

  }
  getFundData(id:string): void {
    this.fundService.getFundById(id).subscribe(data => {
      this.imgSrc = data.Logo;
      this.appitems[0].link = '/fundSummary/'+data.Id;
      this.appitems[3].items[1].link = '/fileManager/'+data.Id;
      var itemsPerf = this.appitems[1].items;
      for(var i=0;i<itemsPerf.length;i++)
      {
        if(i<data.PerfReports.length)
        {
          itemsPerf[i].label = data.PerfReports[i].Name;
          itemsPerf[i].link = '/fundPerformance/'+data.Id+'/'+data.PerfReports[i].Id;
        }
        else{
          itemsPerf[i].hidden = true;
        }
      }
      var itemsHiglight = this.appitems[2].items;
      for(var i=0;i<itemsHiglight.length;i++)
      {
        if(i<data.Highlights.length)
        {
          itemsHiglight[i].label = data.Highlights[i].Name;
        }
        else{
          itemsHiglight[i].hidden = true;
        }
      }
      
      
    })
  }
  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get("id")??'';
    this.getFundData(id);
  }
  toggle():void{
    this.isClose = !this.isClose;
  }

}
let appitems = [
  { label: 'Invester summary', link: '' },
  {
    label: 'Fund performance',
    items: [{},{},{},{}]
  },
  {
    label: 'Highlighted portfolio', 
    items: [{},{},{},{}]
  },
  {
    label: 'File manager',
    items: [
      {
        label: 'Tax center'
      },
      {
        label: 'Other documents',
      }
    ]
  },
  {
    hidden:true,
    label: 'Item 1 (with Font awesome icon)',
    expanded: true,
    //faIcon: 'fab fa-500px',
    items: [
      {
        label: 'Item 1.1',
        link: '/item-1-1',
        //faIcon: 'fab fa-accusoft'
      },
      {
        label: 'Item 1.2',
        //faIcon: 'fab fa-accessible-icon',
        //disabled: true,
        items: [
          {
            label: 'Item 1.2.1',
            link: '/item-1-2-1',
            //faIcon: 'fa-allergies' // Font awesome default prefix is fas
          },
          {
            label: 'Item 1.2.2',
            //faIcon: 'fas fa-ambulance',
            items: [
              {
                label: 'Item 1.2.2.1',
                faIcon: 'fas fa-anchor',  // Still you can specify if you want to
                onSelected: function () {
                  console.log('Item 1.2.2.1');
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {

    hidden:true,
    label: 'Item 2',
    //icon: 'alarm',
    items: [
      {
        label: 'Item 2.1',
        link: '/item-2-1',
        icon: 'favorite_border',
        activeIcon: 'favorite',
        disabled: true,
      },
      {
        label: 'Item 2.2',
        link: '/item-2-2',
        icon: 'favorite_border',
        activeIcon: 'favorite',
        navigationExtras: {
          queryParams: { order: 'popular', filter: 'new' },
        }
      }
    ]
  },
  {

    hidden:true,
    label: 'Item 3',
    //icon: 'offline_pin',
    onSelected: function () {
      console.log('Item 3');
    }
  },
  { 
    
    label: 'Item 4',
    link: '/item-4',
    //icon: 'star_rate',
    hidden: true
  }
];
