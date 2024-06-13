import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService} from "../../Services/account.service";
import {CreateIncomeDto} from "../../Models/create-income-dto.model";
import {Account} from "../../Models/account.model";
import {FormsModule} from "@angular/forms";
import {CommonModule, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CurrencyPipe,
    CommonModule,
  ],
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {
  income: CreateIncomeDto = {
    accountId: 0,
    amount: 0
  };

  accounts: Account[] = [];

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserAccounts();
  }

  loadUserAccounts(): void {
    this.accountService.getUserAccounts().subscribe(
      accounts => {
        this.accounts = accounts;
      },
      error => {
        console.error('Error loading accounts', error);
        // Handle error (e.g., show error message)
      }
    );
  }

  addIncome(): void {
    this.accountService.addIncome(this.income).subscribe(
      response => {
        console.log('Income added successfully', response);
        this.router.navigate(['/dashboard']); // Redirect to dashboard after successful addition
      },
      error => {
        console.error('Error adding income', error);
        // Handle error (e.g., show error message)
      }
    );
  }
}

