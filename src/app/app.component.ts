import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { CardComponent } from "./components/card/card.component";
import { TransactionComponent } from './components/transaction/transaction.component';
import { StatsComponent } from "./components/stats/stats.component";
import { OutcomesComponent } from './components/outcomes/outcomes.component';
import { NewtransactionComponent } from './components/newtransaction/newtransaction.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    MenubarComponent,
    CardComponent,
    TransactionComponent,
    StatsComponent,
    OutcomesComponent,
    NewtransactionComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angu-dashboard';
}
