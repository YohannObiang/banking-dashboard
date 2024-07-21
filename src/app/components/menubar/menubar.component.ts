import { Component, OnInit } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  standalone: true,
  styleUrls: ['./menubar.component.css'],
  imports:[BadgeModule,AvatarModule]
})
export class MenubarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
