import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService} from "../../Services/account.service";
import {CreateAccountDto} from "../../Models/create-account-dto.model";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  standalone: true,
  styleUrls: ['./add-account.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AddAccountComponent {
  account: CreateAccountDto = {
    name: '',
    balance: 0
  };

  constructor(private accountService: AccountService, private router: Router) {}

  createAccount(): void {
    this.accountService.createAccount(this.account).subscribe(
      response => {
        console.log('Account created successfully', response);
        this.router.navigate(['/dashboard']); // Redirect to dashboard after successful creation
      },
      error => {
        console.error('Error creating account', error);
        // Handle error (e.g., show error message)
      }
    );
  }
}
