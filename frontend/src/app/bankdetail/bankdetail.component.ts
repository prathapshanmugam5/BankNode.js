import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Bankcasumer } from '../bankcasumer';
import { Newaccount } from '../newaccount';
import { Security } from '../security';

@Component({
  selector: 'app-bankdetail',
  templateUrl: './bankdetail.component.html',
  styleUrls: ['./bankdetail.component.css']
})
export class BankdetailComponent implements OnInit{

  constructor(private ser:SecurityService,private route:Router,private active:ActivatedRoute){}
  name: String|undefined;
  newAccountData: Security;
  
  
  ngOnInit(): void {
    this.name = this.active.snapshot.params['username'];

  this.ser.getbyname(this.name?.toString()).subscribe(
    (result) => {
      this.newAccountData = result;
      console.log(result);
      
    },
    (error) => {
      console.error(error);
    }
  );
  }
  
  fundtransfer(){
    this.route.navigate(["signin"])
  }
  transaction(){
    this.route.navigate(["getall"])
  }
  

    
    
  }
  

