import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BankcustomerComponent } from './bankcustomer/bankcustomer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BankdetailComponent } from './bankdetail/bankdetail.component';
import { LoanComponent } from './loan/loan.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CreditComponent } from './credit/credit.component';
import { DepositComponent } from './deposit/deposit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    BankcustomerComponent,
    LoginComponent,
    BankdetailComponent,
    LoanComponent,
    TransactionComponent,
    CalculatorComponent,
    CreditComponent,
    DepositComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
