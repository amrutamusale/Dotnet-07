import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserData } from '../models/UserData';
import { AccountService } from '../services/account.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  clickEventSubscription:Subscription | undefined;
  

  constructor(private auth: AuthService, private accountService:AccountService) { 
    this.clickEventSubscription= this.accountService.getClickEvent().subscribe(()=>{
        this.incrementCount();
    })
  }

  users: Array<UserData> = new Array<UserData>();
  ngOnInit(): void {

    this.auth.getUser().subscribe((res: UserData[]) => this.users = res, (err: any) => console.log(err))
  }
  count:number=0;
  incrementCount(){
    this.count++;
  }
  quantity:number=0;
  i=1;
  plus(){
    if(this.i !=50){
      this.i++;
      this.quantity=this.i;
    }
  }
    minus(){
      if(this.i !=1){
        this.i--;
        this.quantity=this.i;
      }
    }
  }