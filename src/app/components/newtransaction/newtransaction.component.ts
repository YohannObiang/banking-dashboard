import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-newtransaction',
  templateUrl: './newtransaction.component.html',
  styleUrls: ['./newtransaction.component.css'],
  standalone:true,
  imports:[CardModule, AvatarModule, ButtonModule]
})
export class NewtransactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
