import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../services/dashboard-data.service';
import { Productivity } from '../../models/productivity.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productivity: Productivity[];
  outpatient: any[];
  exams: any[];
  surgeries: any[];
  derivations: any[];
  classification: any[];
  generalTotal: number;

  constructor(private dataService: DashboardDataService) {
    this.productivity = [];
    this.outpatient = [];
    this.exams = [];
    this.derivations = [];
    this.classification = [];
    this.surgeries = [];
    this.generalTotal = 0;
  }

  ngOnInit(): void {
    this.getDashboard();
  }
  
  getDashboard() {
    this.dataService.getData().subscribe((data: Productivity[]) => {
      console.log(data)
      // this.productivity = data.map( (prod: Productivity) => new Productivity(prod.id, prod.sucursal, prod.anio, prod.mes, prod.tipo, 
      //   prod.prevision, prod.cantidad, prod.total));
      //   console.log(this.productivity)
      if(data) {
        data.forEach((prod: any) =>{
          this.getProductivityByType(prod);
          this.classification = [this.derivations, this.exams, this.surgeries, this.outpatient];
          this.getGeneralTotal(prod.total)
          console.log(this.classification)
        })

      }
    })

  }

  getProductivityByType(item) {
    switch (item.tipo) {
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

  getGeneralTotal(total: number) {
    this.generalTotal = this.generalTotal + total;
  }

}
