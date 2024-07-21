import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { CardModule } from 'primeng/card';

export interface PeriodicElement {
  icon: string;
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {icon: "pi-shopping-cart", position: "Tesco Market", name: 'Shopping', weight: "14 Dec 2020", symbol: '$75.67'},
  {icon: "pi-gauge", position: "ElectroMen Market", name: 'Shopping', weight: "13 Dec 2020", symbol: '$250.00'},
  {icon: "pi-sparkles", position: "Fiorgio Restaurant", name: 'Food', weight: "07 Dec 2020", symbol: '$19.50'},
  {icon: "pi-user", position: "Ann Marlin", name: 'Sport', weight: "06 Dec 2020", symbol: '$350'}
];
export interface PeriodicElement2 {
  icon: string;
  name: string;
  position: string;
  symbol: string;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {icon: "pi-shopping-cart", position: "Tesco Market", name: 'Shopping', symbol: '$75.67'},
  {icon: "pi-gauge", position: "ElectroMen Market", name: 'Shopping', symbol: '$250.00'},
  {icon: "pi-sparkles", position: "Fiorgio Restaurant", name: 'Food', symbol: '$19.50'},
  {icon: "pi-user", position: "Ann Marlin", name: 'Sport', symbol: '$350'}
];


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  standalone:true,
  imports:[CardModule, MatTableModule]
})
export class TransactionComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  displayedColumns2: string[] = ['position', 'name', 'symbol'];
  dataSource2 = ELEMENT_DATA2;

}
