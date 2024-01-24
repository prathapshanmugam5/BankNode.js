import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { Newaccount } from '../newaccount';
import { Bankcasumer } from '../bankcasumer';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{

  constructor(private ser:SecurityService,private router:Router){}
  
  
  transaction:Bankcasumer[]=[];
  ngOnInit(): void {
    this.ser.getbyall().subscribe((res)=>{
      this.transaction=res;
    });
    
    
  }
  
  delete(id:number){
    this.ser.deletebyid(id).subscribe((res)=>{
      console.log("successfully deleted");
      this.ngOnInit();
    });

  }



}
