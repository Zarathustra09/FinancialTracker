import { Component } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { CreateAccountDto } from '../../Models/create-account-dto.model';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { Account } from '../../Models/account.model';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent {
  accountDto: CreateAccountDto = { name: '', balance: 0 };
  accountId: number;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router // Inject Router
  ) {
    this.accountId = +this.route.snapshot.paramMap.get('id')!;
  }

  updateAccount() {
    this.accountService.updateAccount(this.accountId, this.accountDto)
      .subscribe({
        next: (updatedAccount: Account) => {
          console.log('Account updated successfully:', updatedAccount);
          this.router.navigate(['/dashboard']); // Navigate to dashboard
        },
        error: (error) => {
          console.error('Error updating account:', error);
          // Handle error (e.g., show an error message)
        }
      });
  }
}
