import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { PageComponent } from './page/page.component';
import { RouterComponent } from './router/router.component';
import { TwitFeedComponent } from './twit-feed/twit-feed.component';
import { TwitComponent } from './twit/twit.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    PageComponent,
    RouterComponent,
    TwitFeedComponent,
    TwitComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
