import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../../Services/expense.service';
import { CreateExpenseDto } from '../../Models/create-expense-dto.model';
import {Account} from "../../Models/account.model";
import {FormsModule} from "@angular/forms";
import {CommonModule, CurrencyPipe} from "@angular/common";


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CurrencyPipe,
    CommonModule

  ],
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  expense: CreateExpenseDto = {
    accountId: 0,
    description: '',
    amount: 0,
    category: 0
  };

  accounts: Account[] = [];

  constructor(private expenseService: ExpenseService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserAccounts();
  }

  loadUserAccounts(): void {
    this.expenseService.getUserAccounts().subscribe(
      accounts => {
        this.accounts = accounts;
      },
      error => {
        console.error('Error loading accounts', error);
        // Handle error (e.g., show error message)
      }
    );
  }

  createExpense(): void {
    this.expenseService.createExpense(this.expense).subscribe(
      response => {
        console.log('Expense created successfully', response);
        this.router.navigate(['/dashboard']); // Redirect to dashboard after successful creation
      },
      error => {
        console.error('Error creating expense', error);
        // Handle error (e.g., show error message)
      }
    );
  }
}
