import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {DashboardComponent} from "./Components/dashboard/dashboard.component";
import {AddExpenseComponent} from "./Components/add-expense/add-expense.component";
import {AddAccountComponent} from "./Components/add-account/add-account.component";
import {AddIncomeComponent} from "./Components/add-income/add-income.component";
import {RegisterComponent} from "./Components/register/register.component";
import {UpdateAccountComponent} from "./Components/update-account/update-account.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addExpense', component: AddExpenseComponent},
  {path: 'addAccount', component: AddAccountComponent},
  {path: 'addIncome', component: AddIncomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'update-account/:id', component: UpdateAccountComponent},
];



