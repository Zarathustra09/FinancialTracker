import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {AccountService} from "./Services/account.service";
import {ExpenseService} from "./Services/expense.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  providers: [AccountService, ExpenseService]
})
export class AppComponent {
  title = 'FinancialTracker';
}
