import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {DashboardComponent} from "./Components/dashboard/dashboard.component";
import {AddExpenseComponent} from "./Components/add-expense/add-expense.component";
import {AddAccountComponent} from "./Components/add-account/add-account.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addExpense', component: AddExpenseComponent},
  {path: 'addAccount', component: AddAccountComponent}
];



