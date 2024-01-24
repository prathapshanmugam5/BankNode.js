import { Component } from '@angular/core';
import { SecurityService } from '../security.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bankcasumer } from '../bankcasumer';

@Component({
  selector: 'app-bankcustomer',
  templateUrl: './bankcustomer.component.html',
  styleUrls: ['./bankcustomer.component.css']
})
export class BankcustomerComponent {

  // bank:Bankcasumer[]=[];
  constructor(private ser:SecurityService,private route:Router){}
 FormOne=new FormGroup({
  accountno:new FormControl('', [Validators.required]),
  branch:new FormControl('', [Validators.required]),
  ifsccode:new FormControl('', [Validators.required]),
  name:new FormControl('', [Validators.required]),
   amount:new FormControl('',[Validators.required]),
   
});
sub(){
  const form=this.FormOne.value as Bankcasumer
  const currentDate = new Date();

  // Specify the time zone for India (Indian Standard Time)
  const indianTimeZone = 'Asia/Kolkata';

  // Format the date and time according to Indian time zone
  const indianDate = currentDate.toLocaleString('en-IN', { timeZone: indianTimeZone });

  form.date = indianDate;
  this.ser.bankcusmer(form).subscribe((res)=>{
    console.log(res);
    alert("Successfully transfer ")
  
    this.route.navigate([""])
  })

}


}




