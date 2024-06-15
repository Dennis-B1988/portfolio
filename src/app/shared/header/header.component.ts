import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainComponent } from '../../main/main.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  currentRoute: string = '';
  burgerMenuOpen = false;
  languageGerman = true;
  languageEnglish = false;

  constructor(private router: Router, private main: MainComponent) {
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


  toggleMenu() {
    this.main.toggleMobile();
    if(this.burgerMenuOpen) {
      this.burgerMenuOpen = false;
      document.body.style.overflow = 'unset';
    console.log(this.burgerMenuOpen);
    } else {
      this.burgerMenuOpen = true;
      document.body.style.overflow = 'hidden';
    console.log(this.burgerMenuOpen);
    }  
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }

  checkWindowSize() {
    if (window.innerWidth > 390) {
      this.burgerMenuOpen = false;
      this.main.isMenuOpen = false;
    }
  }
}
