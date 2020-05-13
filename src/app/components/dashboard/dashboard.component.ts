import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../services/dashboard-data.service';
import { Productivity } from '../../models/productivity.model';
import MonthsAndYears from '../../models/monthsAndYears'
import { AttentionType } from '../../models/attentionType.model';
import { List } from '../../models/list.model';
import { Tags } from '../../models/tags.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productivity: Productivity[];
  outpatient: AttentionType[];
  exams: AttentionType[];
  surgeries: AttentionType[];
  derivations: AttentionType[];
  classification: any;
  generalTotal: number;
  months: any[];
  years: number[];
  branchOffices: any[];
  listByTags: List;
  tags: Tags;
  tagSelected: Tags;
  constructor(private dataService: DashboardDataService) {
    this.productivity = [];
    this.outpatient = [];
    this.exams = [];
    this.derivations = [];
    this.classification = new List([]);
    this.surgeries = [];
    this.generalTotal = 0;
    this.months = MonthsAndYears.months;
    this.years = MonthsAndYears.years.reverse();
    this.branchOffices = MonthsAndYears.branchOffices;
    this.listByTags = new List([]);
    this.tags;
  }
  
  ngOnInit(): void {
    this.getDashboard();         
  }
  
  getDashboard() {
    this.dataService.getData().subscribe((data: Productivity[]) => {
      console.log(data)
      if(data) {
        data.forEach((prod: any) =>{
          let item = new AttentionType(prod.tipo, prod.cantidad, prod.total, prod.prevision, prod.sucursal, prod.anio, prod.mes)
          this.getProductivityByType(item);
          this.classification = [this.outpatient, this.exams, this.surgeries, this.derivations];
          this.listByTags.attentionTypeList = this.classification;
          this.getGeneralTotal(item.total)
        })

      }
    })

  }

  getProductivityByType(item: AttentionType) {
    switch (item.name) {
      case 'Derivaciones':
        this.derivations.push(item);
        break;
      case 'Cirugías':
        this.surgeries.push(item);
        break;
      case 'Exámenes':
        this.exams.push(item);
        break;
      case 'Citas ambulatorias':
        this.outpatient.push(item);
        break;        
    }    
  }

  getGeneralTotal(total?: number) {
    console.log(total)
    let newList: any =  this.listByTags.attentionTypeList;
    total ? this.generalTotal = this.generalTotal + total : newList.forEach(list => list.forEach(_list => this.generalTotal = this.generalTotal + _list.total));
    
  }

  
  setTags(tag: string, tagType:string) {
    this.generalTotal = 0;
    tag === 'Todas' ? (this.listByTags.attentionTypeList = this.classification, this.getGeneralTotal()) :
    (this.setArrayTags(tag, tagType),
    this.filterBytags())
  }

  setArrayTags(tag: string, typeTag: string) {
    this.tags = {name: tag, type: typeTag};
  }

  filterBytags() {
    let newList: any = []
    // let lastTag = this.tags.slice(-1).pop();
    // this.listByTags.attentionTypeList = [];
    this.listByTags.filterByTags(this.classification, this.tags)
    this.getGeneralTotal()
    
  }


  

}
