import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  styleUrls: ['./sidebar.component.css'],
  imports:[MenuModule, ButtonModule]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Overview', icon: 'pi pi-chart-line' },
            { label: 'Transaction', icon: 'pi pi-list' },
            { label: 'Cards', icon: 'pi pi-credit-card' },
            { label: 'Invoices', icon: 'pi pi-file' },
            { label: 'Goals', icon: 'pi pi-bookmark' },
            { label: 'Settings', icon: 'pi pi-cog' },
        ];
    }

}
