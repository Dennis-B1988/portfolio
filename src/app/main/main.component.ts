import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ScrollDownComponent } from './socials-scroll/scroll-down/scroll-down.component';
import { SocialsComponent } from './socials-scroll/socials/socials.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent, 
    AboutMeComponent, 
    SocialsComponent, 
    ScrollDownComponent, 
    SkillsComponent, 
    PortfolioComponent, 
    ContactComponent,
    AppComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent implements OnInit {

  currentRoute: string = '';
  isMenuOpen = false;
  
  constructor(private router: Router, private app: AppComponent) {
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


  scrollDown() {
    this.app.scrollToContacts();
  }

  toggleMobile() {
    if(this.isMenuOpen){
      this.isMenuOpen = false;
      console.log(this.isMenuOpen);
    } else {
      this.isMenuOpen = true;
      console.log(this.isMenuOpen);
    }
  }
}
