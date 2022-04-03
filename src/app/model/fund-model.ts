export class FundGroupModel {
    public Id:number=0
    public Name:string=''
    public Logo:string=''
    public PerfReports: FundReport[] = [];
    public Highlights: HighLight[] = [];

    Agg:number[][] = [[]]
    AggItems:string[] = []
}
export class Allocation
{
    Name:string=''
    Val:number=0
}
export class FundReport {
    public Id:string=''
    public Name: string = ''
    public Status: string = ''
    G_Con:number = 0
    G_Con_M:number = 0

    G_Dis:number= 0
    G_Dis_M:number= 0
    G_NAV_M:number= 0
    G_NAV:number= 0
    G_TOT:number= 0
    G_TOT_M:number= 0

    Allocation:Allocation[]=[]
}

export class HighLight{
    public Name: string = ''
}