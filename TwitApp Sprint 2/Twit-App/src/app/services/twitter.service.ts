import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  
 api_url = 'http://localhost:44308';
 


 constructor(private http: HttpClient) { }

 getTimeline() {
   return this.http
     .get<any[]>(this.api_url+'/home_timeline')
     .pipe(map(data => data));

 }

 getMentions() {
   return this.http
     .get<any[]>(this.api_url+'/mentions_timeline')
     .pipe(map(data => data));

 }

  tweet(tweetdata: string) {
       return this.http.post<any>(`${this.api_url}/post_tweet/`, { status: tweetdata})
           .pipe(map(tweet => {
           
               alert("tweet posted")

               return tweet;
           }));
   }



}