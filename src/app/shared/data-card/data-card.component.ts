import { Component, OnInit, Input } from '@angular/core';
import { Productivity } from '../../models/productivity.model';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent implements OnInit {

  // @Input() productivity: Productivity;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.productivity)
  }

}
