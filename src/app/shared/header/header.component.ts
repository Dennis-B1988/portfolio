import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MainComponent } from '../../main/main.component';
import { TranslationService } from '../../service/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule], // Import ContactFormComponent
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentRoute: string = '';
  burgerMenuOpen = false;
  languageGerman = true;
  languageEnglish = false;
  translate = inject(TranslationService);


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
    if (this.burgerMenuOpen) {
      this.burgerMenuOpen = false;
      document.body.style.overflow = 'unset';
    } else {
      this.burgerMenuOpen = true;
      document.body.style.overflow = 'hidden';
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }


  checkWindowSize() {
    if (window.innerWidth > 767) {
      this.burgerMenuOpen = false;
      this.main.isMenuOpen = false;
    }
  }


  checkLanguage() {
    const lang = this.translate.currentLang;
    this.languageGerman = lang === 'de';
    this.languageEnglish = lang === 'en';
    this.translate.switchLanguage(lang);
  }
}
