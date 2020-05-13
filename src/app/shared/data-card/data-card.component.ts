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
    // console.log(this.data.length)
    this.data.length > 0 && this.dataClassification()
  }

  dataClassification() {
    this.data.forEach(item => {
      item.name === 'Citas ambulatorias' ? this.getPrevisonQty(item) : this.getQty(item.qty);
      this.getTotalByType(item.total);
    })
  }
  
  getPrevisonQty(item) {
    switch (item.prevision) {
      case 'Fonasa':
          this.fonasaPrevision.qty = this.fonasaPrevision.qty + item.qty;
        break;
      case 'Isapre':
          this.isaprePrevision.qty = this.isaprePrevision.qty + item.qty;
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
