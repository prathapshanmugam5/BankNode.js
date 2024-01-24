import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BankcustomerComponent } from './bankcustomer/bankcustomer.component';
import { LoginComponent } from './login/login.component';
import { BankdetailComponent } from './bankdetail/bankdetail.component';
import { LoanComponent } from './loan/loan.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DepositComponent } from './deposit/deposit.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"user",component:UserComponent},
  {path:"signin",component:BankcustomerComponent},
  {path:"login",component:LoginComponent},
  {path:"getid/:username",component:BankdetailComponent},
  {path:"name",component:BankdetailComponent},
  {path:"loan",component:LoanComponent},
  {path:"getall",component:TransactionComponent},
  {path:"calculator",component:CalculatorComponent},
  {path:"deposit",component:DepositComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
