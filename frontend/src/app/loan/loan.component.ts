import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { Newaccount } from '../newaccount';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {
  constructor(private ser:SecurityService,private route:Router){}
 // loanAmountValue: number = 1000000; 

  formone=new FormGroup({
    loanamount:new FormControl('', [Validators.required]),
      numberofyear: new FormControl('', [Validators.required]),
      rateofinterset:new FormControl('', [Validators.required]) ,
      monthlysalary:new FormControl('', [Validators.required]) ,
      anualincome: new FormControl('', [Validators.required]),
      incometaxnumber:new FormControl('', [Validators.required]),
    
  });
  
submit(){
  const form=this.formone.value as Newaccount
  this.ser.newpost(form).subscribe((res)=>{
     console.log(res);
     alert("check ur detail")

  })
}

calculateEMI(): number {
  // Perform your EMI calculation based on the form values
  // Example calculation, replace with your actual formula

  const loanAmountRaw = this.formone.value.loanamount;
  const numbeerOfYearss=this.formone.value.numberofyear;
  const reteOfInterests=this.formone.value.rateofinterset;

  // Convert the loanAmountRaw to a number using Number() or parseFloat()
  const loanAmount = (typeof loanAmountRaw === 'string' ? parseFloat(loanAmountRaw) : loanAmountRaw) || 0;

  const numberOfYears = (typeof numbeerOfYearss === 'string' ? parseFloat(numbeerOfYearss) : numbeerOfYearss) || 0;
  const rateOfInterest = (typeof reteOfInterests === 'string' ? parseFloat(reteOfInterests) : reteOfInterests)  || 0;
  // Replace this formula with your actual EMI calculation formula
  const interest = (loanAmount * rateOfInterest * numberOfYears) / 100;
  const emi = (loanAmount + interest) / (numberOfYears * 12);
  
  return emi;
  
  

}
calculateInterest(): number {
  const loanAmountRaw = this.formone.value.loanamount;
  const numberOfYearsRaw = this.formone.value.numberofyear;
  const rateOfInterestRaw = this.formone.value.rateofinterset;

  const loanAmount = (typeof loanAmountRaw === 'string' ? parseFloat(loanAmountRaw) : loanAmountRaw) || 0;
  const numberOfYears = (typeof numberOfYearsRaw === 'string' ? parseFloat(numberOfYearsRaw) : numberOfYearsRaw) || 0;
  const rateOfInterest = (typeof rateOfInterestRaw === 'string' ? parseFloat(rateOfInterestRaw) : rateOfInterestRaw) || 0;

  // Replace this formula with your actual EMI calculation formula
  const interest = (loanAmount * rateOfInterest * numberOfYears) / 100;

  return interest;
}
calculatetolal(): number {
  const loanAmountRaw = this.formone.value.loanamount;
  const numberOfYearsRaw = this.formone.value.numberofyear;
  const rateOfInterestRaw = this.formone.value.rateofinterset;

  const loanAmount = (typeof loanAmountRaw === 'string' ? parseFloat(loanAmountRaw) : loanAmountRaw) || 0;
  const numberOfYears = (typeof numberOfYearsRaw === 'string' ? parseFloat(numberOfYearsRaw) : numberOfYearsRaw) || 0;
  const rateOfInterest = (typeof rateOfInterestRaw === 'string' ? parseFloat(rateOfInterestRaw) : rateOfInterestRaw) || 0;

  // Replace this formula with your actual EMI calculation formula
  const interest = (loanAmount * rateOfInterest * numberOfYears) / 100;
   const total=interest+loanAmount;
  return total;
}


}
