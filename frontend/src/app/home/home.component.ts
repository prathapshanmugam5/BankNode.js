import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Newaccount } from '../newaccount';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  constructor(private route:Router,private ser:SecurityService){}
  


  



  reg(){
    this.route.navigate(['user'])

  }
  
  singin(){
    this.route.navigate(['login'])
  }
  
}
