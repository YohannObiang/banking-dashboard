import { Component, OnInit } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-outcomes',
  templateUrl: './outcomes.component.html',
  styleUrls: ['./outcomes.component.css'],
  standalone: true,
  imports:[ProgressBarModule]
})
export class OutcomesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
