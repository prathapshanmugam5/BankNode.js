import { Component } from '@angular/core';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credit } from '../credit';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  constructor(private ser:SecurityService,private route:Router){}

  FormOne=new FormGroup({
    bankcustmer:new FormControl('', [Validators.required]),
    pan:new FormControl('', [Validators.required,Validators.pattern(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/)]),
    mobile:new FormControl('', [Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
    occupation:new FormControl('', [Validators.required]),
     organization:new FormControl('',[Validators.required]),
     addresslineone:new FormControl('',[Validators.required]),
     addresslinetwo:new FormControl('',[Validators.required]),
     pincode:new FormControl('',[Validators.required, Validators.pattern(/^[0-9]{6}$/)]),
     city:new FormControl('',[Validators.required]),
     communication:new FormControl('',[Validators.required]),
     salary:new FormControl('',[Validators.required,Validators.min(20000)]),
     
  });
  submit(){
    const form=this.FormOne.value as Credit
    this.ser.creditcard(form).subscribe((res)=>{
      console.log(res);
      alert("Eligibility check");
    })
  }
  
  setCommunication(value: string) {
    this.FormOne.get('communication')?.setValue(value);
  }
  setoccupation(value:string){
    this.FormOne.get("occupation")?.setValue(value);
  }
}
