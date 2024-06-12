import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  currentRoute: string = '';

  constructor(private router: Router) { 
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }


  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }


  isActive(route: string): boolean {
    return this.currentRoute.includes(route);
  }

}
