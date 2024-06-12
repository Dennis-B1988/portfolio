import { Component } from '@angular/core';
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
export class MainComponent {

  constructor(private app: AppComponent) {}

  scrollDown() {
    this.app.scrollToContacts();
  }
}
