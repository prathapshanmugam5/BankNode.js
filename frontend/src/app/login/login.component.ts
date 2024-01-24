import { Component } from '@angular/core';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Security } from '../security';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private ser:SecurityService,private route:Router) {}

  loginForm=new FormGroup({
    username:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required]),
});
on(){
  const form=this.loginForm.value as Security
  this.ser.getAll(form).subscribe((res)=>{
console.log(res);
if(res == 'login ok'){
  alert('Login Successfully');
  
this.route.navigate(['getid', this.loginForm.controls.username.value]);

  
}
else{
  alert('Invalid username or password. Please try again.');
}
   
  });
}


}