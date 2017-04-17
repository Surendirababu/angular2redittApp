import { Component } from '@angular/core';
import {Hero} from './hero';

const HEROES: Hero[] = [
  { id: 1, name: 'Murali Vijay' },
  { id: 2, name: 'K L Rahul' },
  { id: 3, name: 'Ajinkya Rahane' },
  { id: 4, name: 'Chetashwar Pujara' },
  { id: 5, name: 'Virat Kholi' },
  { id: 6, name: 'Suresh Raina' },
  { id: 7, name: 'M S Dhoni' },
  { id: 8, name: 'Ravindra Jadeja' },
  { id: 9, name: 'Ravi Ashwin' },
  { id: 10, name: 'Bhuvaneshwar Kumar' },
  { id: 11, name: 'Ishant Sharma' }
];


@Component({
  selector: 'app-root',
  template: 
  `
  <h1>{{title}}</h1>
  <h2>My Players</h2>
  <ul class="list-group heroes">
    <li *ngFor = "let hero of heroes" class="list-group-item" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
       {{hero.name}} <span class = "badge">{{hero.id}}</span> 
    </li>
  </ul>
   <hero-detail [hero]='selectedHero'></hero-detail>
  `,
  styleUrls: ['./app.component.css'],
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #FFB6C1;
      margin: .5em;
      padding: .3em 0;
      height: 2em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
   
  `]

})
export class AppComponent {
  title = 'Tour of Players';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
  console.log("selectedHero"+this.selectedHero);
  this.selectedHero = hero;
  console.log("selectedHero"+this.selectedHero);
  debugger;
}
}
