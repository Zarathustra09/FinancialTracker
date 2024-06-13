import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { Register } from '../../Models/register.model';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerDto: Register = {
    username: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    this.authService.register(this.registerDto).subscribe(
      response => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']); // Redirect to login page after successful registration
      },
      error => {
        console.error('Error registering user', error);
        // Handle registration error (e.g., show error message)
      }
    );
  }
  login(): void {
    this.router.navigate(['/login']); // Call the logout method from AuthService
  }
}
