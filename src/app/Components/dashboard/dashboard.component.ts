import { Component, OnInit } from '@angular/core';
import { AccountService } from "../../Services/account.service";
import { ExpenseService } from "../../Services/expense.service";
import { Account } from "../../Models/account.model";
import { Expense } from "../../Models/expense.model";
import { CommonModule, CurrencyPipe } from "@angular/common";
import {Router, RouterLink} from '@angular/router'; // Import Router from @angular/router
import { AuthService } from "../../Services/auth.service";
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    CurrencyPipe, CommonModule, RouterLink
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accounts: Account[] = [];
  expenses: Expense[] = [];
  chart: any;

  constructor(
    private accountService: AccountService,
    private expenseService: ExpenseService,
    private router: Router, // Inject Router
    private authService: AuthService
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
        this.createChart(); // Call createChart after fetching expenses
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

  getCategoryName(categoryId: number): string {
    const categories = [
      'Transportation',
      'Food and Groceries',
      'Housing/Rent',
      'Utility',
      'Other'
    ];
    return categories[categoryId - 1] || 'Unknown';
  }

  createChart(): void {
    const categoryTotals = this.getCategoryTotals();
    const categoryLabels = ['Transportation', 'Food and Groceries', 'Housing/Rent', 'Utility', 'Other'];

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: categoryLabels,
        datasets: [
          {
            label: 'Expenses by Category',
            data: categoryTotals,
            backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FF8F33'],
            borderColor: '#000000',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  getCategoryTotals(): number[] {
    const categoryTotals = [0, 0, 0, 0, 0]; // Initialize totals for each category

    this.expenses.forEach(expense => {
      categoryTotals[expense.category - 1] += expense.amount;
    });

    return categoryTotals;
  }

  logout(): void {
    this.authService.logout(); // Call the logout method from AuthService
  }
}
