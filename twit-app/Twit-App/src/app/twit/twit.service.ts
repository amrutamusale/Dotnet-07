import { Injectable } from '@angular/core';
import { TwitRecord } from '../model/twit';

@Injectable({
  providedIn: 'root'
})
export class TwitService {
  throwError<T>(message1: string, twit: TwitRecord) {
    throw new Error('Method not implemented.');
  }
  addtwit(twit: TwitRecord) {
    throw new Error('Method not implemented.');
  }
  gettwits() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
