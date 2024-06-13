import { Component, OnInit } from '@angular/core';
import { AccountService} from "../../Services/account.service";
import { ExpenseService} from "../../Services/expense.service"; // Adjust path as necessary
import {Account} from "../../Models/account.model";
import {Expense} from "../../Models/expense.model";
import {CommonModule, CurrencyPipe} from "@angular/common";
import { Router } from '@angular/router';
import { AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    CurrencyPipe, CommonModule
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accounts: Account[] = [];
  expenses: Expense[] = [];

  constructor(
    private accountService: AccountService,
    private expenseService: ExpenseService,
    private router: Router,
    private authService: AuthService // Inject AuthService
  ) { }

  ngOnInit(): void {
    this.getAccounts();
    this.getExpenses();
  }

  getAccounts(): void {
    this.accountService.getUserAccounts().subscribe(
      (accounts) => {
        this.accounts = accounts;
      },
      (error) => {
        console.error('Error fetching accounts', error);
      }
    );
  }

  getExpenses(): void {
    this.expenseService.getUserExpenses().subscribe(
      (expenses) => {
        this.expenses = expenses;
      },
      (error) => {
        console.error('Error fetching expenses', error);
      }
    );
  }
  addAccount(): void {
    this.router.navigate(['/addAccount']);  // Navigate to addAccount
  }

  addExpense(): void {
    this.router.navigate(['/addExpense']);  // Navigate to addExpense
  }

  addIncome(accountId: number): void {
    this.router.navigate(['/addIncome'], { queryParams: { accountId: accountId } });
  }
  logout(): void {
    this.authService.logout(); // Call the logout method from AuthService
  }
}
