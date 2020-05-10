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
  constructor(private dataService: DashboardDataService) {
    this.productivity = [];
  }

  ngOnInit(): void {
    this.getDashboard();
  }
  
  getDashboard() {
    this.dataService.getData().subscribe((data: Productivity[]) => {
      this.productivity = data.map( (prod: Productivity) => new Productivity(prod.id, prod.sucursal, prod.anio, prod.mes, prod.tipo, 
        prod.prevision, prod.cantidad, prod.total));
        console.log(this.productivity)
    })

  }

}
