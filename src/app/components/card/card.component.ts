import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CardModule, ProgressBarModule,FormsModule, InputSwitchModule]
})
export class CardComponent implements OnInit {
  checked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
