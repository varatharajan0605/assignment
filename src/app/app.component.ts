import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  navItems = [
    {
      label: 'Route1',
      path: 'route1'
    },
    {
      label: 'Route2',
      path: 'route2'
    },
    {
      label: 'Route3',
      path: 'route3'
    },
    {
      label: 'Route4',
      path: 'route4'
    },
    {
      label: 'Route5',
      path: 'route5'
    },
    {
      label: 'Route6',
      path: 'route6'
    },
  ]
}
