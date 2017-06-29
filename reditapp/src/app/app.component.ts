import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>   
   <router-outlet></router-outlet>
  <!--<my-dashboard></my-dashboard>
  <my-heroes></my-heroes>-->
 `
})
export class AppComponent {
  title = 'Tour of Players!!';
}