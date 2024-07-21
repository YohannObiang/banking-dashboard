import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  standalone:true,
  imports:[MatProgressBarModule]
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
