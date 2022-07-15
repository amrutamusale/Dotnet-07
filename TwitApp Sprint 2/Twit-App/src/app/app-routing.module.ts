import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TwitterMentionsComponent } from './twitter-mentions/twitter-mentions.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';

const routes: Routes = [

{
  path: 'home',
  component: HomeComponent
},
{
  path: '',
  component: HomeComponent
},
{
  path: 'twitter_timeline',
  component: TwitterTimelineComponent
},
{
  path: 'twitter_mentions',
  component: TwitterMentionsComponent
},
{

  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{ path: '',
  redirectTo: '',
  pathMatch: 'full'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
