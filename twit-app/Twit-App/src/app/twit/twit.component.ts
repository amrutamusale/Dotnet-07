import { Component, Input, OnInit } from '@angular/core';
import { TwitRecord } from '../model/twit';
import { UserRecord } from '../model/User';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent implements OnInit {
  @Input() twit: TwitRecord = new TwitRecord();
  user: UserRecord = new UserRecord();
  now: number = Date.now();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser(this.twit.userId)
      .subscribe(user => this.user = user);
  }
}