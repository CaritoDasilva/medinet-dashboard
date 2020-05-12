import { Component, OnInit, Input } from '@angular/core';
import { Productivity } from '../../models/productivity.model';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent implements OnInit {

  @Input() data: any;

  prevision: any[]
  fonasaPrevision: any;
  isaprePrevision: any;
  qty: number;
  total: number;
  constructor() {
    this.fonasaPrevision = {
      type: 'Fonasa',
      qty: 0
    }
    this.isaprePrevision = {
      type: 'Isapre',
      qty: 0
    }
    this.prevision = [this.fonasaPrevision, this.isaprePrevision];
    this.qty = 0;
    this.total = 0;
  }

  ngOnInit(): void {
    console.log(this.data)
    this.dataClassification()
  }

  dataClassification() {
    this.data.forEach(item => {

      item.tipo === 'Citas ambulatorias' ? this.getPrevisonQty(item) : this.getQty(item.cantidad);
      this.getTotalByType(item.total);
    })
    console.log(this.prevision)
  }

  getPrevisonQty(item) {
    switch (item.prevision) {
      case 'Fonasa':
          this.fonasaPrevision.qty = this.fonasaPrevision.qty + item.cantidad;
        break;
      case 'Isapre':
          this.isaprePrevision.qty = this.isaprePrevision.qty + item.cantidad;
        break;
    }
  }

  getQty(qty: number) {
    this.qty = this.qty + qty; 
  }

  getTotalByType(total: number) {
    this.total = total;
  }

}
