
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

import {Observable} from 'rxjs/Observable';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService
{

  private _URLVal:string ="http://localhost:8080/palyers/details/json";

  private _URLLocalVal:string ="/resources/vendor/heroes.json";

 constructor(private _http: Http) 
 {

 }
getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
  }

getHeroesFromHttpCall() {
  return this._http.get(this._URLVal)
          .map((response:Response) => response.json());
}
getHeroesSlowly(): Promise<Hero[]> {//
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 5000);
  });
}
}