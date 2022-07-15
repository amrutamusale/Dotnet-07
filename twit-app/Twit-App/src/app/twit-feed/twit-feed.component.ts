import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TwitService } from '../twit/twit.service';
import { UserService } from '../user/user.service';
import { UserRecord } from '../model/User';
import { TwitRecord, TwitSchema } from '../model/twit';


@Component({
  selector: 'app-twit-feed',
  templateUrl: './twit-feed.component.html',
  styleUrls: ['./twit-feed.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
})
export class TwitFeedComponent implements OnInit {
  twits: TwitRecord[] = [];
  isOpen = false;
  hide = true;
  User: UserRecord | undefined;
  newtwit: TwitRecord | undefined;
  navigationSubscription: any;

  constructor(
    public twitService: TwitService,
    public userService: UserService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initNewtwit();
        this.gettwits();
        this.getUser();
      }
    });
  }

  ngOnInit(): void {
    this.initNewtwit();
    this.getUser();
    this.gettwits();
  }

  initNewtwit(data?: Partial<TwitSchema>): void {
    this.newtwit = (data) ? new TwitRecord(data) : new TwitRecord();
  }

  gettwits(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.filtertwits(id);
  }

  filtertwits(id: string) : void {
    this.twitService.gettwits()
      .subscribe((twits: TwitRecord[]) => {
        const followed: string[] = this.getUsersFollowed(id);
        followed.push(id);
        this.twits = twits
          .filter((twit: TwitRecord) => followed.indexOf(twit.userId) !== -1)
          .slice(0, 20)
          .sort((a, b) => {
            if (a.created < b.created) {
              return 1;
            }
            if (a.created > b.created) {
              return -1;
            }
            return 0;
          });
      });
  }


  getUser(): void {
    const idKey = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(idKey)
      .subscribe(user => {
        this.user = user;
      });
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.hide = !this.hide;
  }

  //add(twitText: string, id?: string)
  add(twitText: string, id?: string) {
    const userId: string = (id !== undefined) ? id : this.user.id;
    this.initNewtwit({ userId, twitText });
    this.twitService
      .addtwit(this.newtwit)
      .subscribe((twit) => this.twits.unshift(twit));
  }

  ngOnDestroy(): void {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  /**
   * Todo: Implement later
   */
  // delete(twit: twit): void {
  //   this.twits = this.twits.filter(t => t !== twit);
  //   this.twitService.deletetwit(twit).subscribe();
  // }

}