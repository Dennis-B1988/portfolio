import { Component, HostListener, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MainComponent } from '../../main/main.component';
import { CheckLanguageService } from '../../service/check-language/check-language.service';
import { TranslationService } from '../../service/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentRoute: string = '';
  burgerMenuOpen = false;
  currentSection = '';
  sections = [
      { id: 'about-me', className: 'about-me' },
      { id: 'skills', className: 'skills' },
      { id: 'portfolio', className: 'portfolio' },
      { id: 'contacts', className: 'contact' }
    ];
  
  translate = inject(TranslationService);
  languages = inject(CheckLanguageService);


  /**
   * Initializes a new instance of the HeaderComponent class.
   *
   * @param {Router} router - The Angular Router instance.
   * @param {MainComponent} main - The MainComponent instance.
   */
  constructor(public router: Router, private main: MainComponent) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }


  /**
   * Initializes the component and sets the current route based on the router's URL.
   *
   * @return {void} This function does not return anything.
   */
  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.onScroll();
  }


  /**
   * Determines if the current route includes the specified route.
   *
   * @param {string} route - The route to check for inclusion.
   * @return {boolean} True if the current route includes the specified route, false otherwise.
   */
  isActive(route: string): boolean {
    return this.currentRoute.includes(route);
  }


  /**
   * Toggles the menu visibility and adjusts the overflow style of the body.
   *
   * @return {void} This function does not return anything.
   */
  toggleMenu() {
    this.main.toggleMenu();
    this.burgerMenuOpen = !this.burgerMenuOpen;
    document.body.style.overflow = this.burgerMenuOpen ? 'hidden' : 'unset';
  }


  @HostListener('window:resize', ['$event'])
  /**
   * Calls the `checkWindowSize` method to update the window size.
   *
   * @return {void} This function does not return anything.
   */
  onResize() {
    this.checkWindowSize();
  }


  /**
   * Checks the window size and updates the burger menu and main menu visibility based on the window width.
   * If the window width is greater than 767, the burger menu and main menu are set to false and the overflow style of the body is set to 'unset'.
   */
  checkWindowSize() {
    if (window.innerWidth > 767) {
      this.burgerMenuOpen = false;
      this.main.isMenuOpen = false;
      document.body.style.overflow = 'unset';
    }
  }


  /**
   * Checks the current language and updates the language flags and translates the page accordingly.
   *
   * @return {void} This function does not return anything.
   */
  checkLanguage() {
    const lang = this.translate.currentLang;
    this.languages.languageGerman = lang === 'de';
    this.languages.languageEnglish = lang === 'en';
    this.translate.switchLanguage(lang);
  }


  @HostListener('window:scroll', ['$event'])
  /**
   * Updates the current route based on the current scroll position.
   *
   * This function iterates over an array of section IDs and checks if the current scroll position is within the range of each section. If it is, the current section ID is stored in the `currentSection` variable. Finally, the `currentRoute` property is updated with the corresponding section ID prefixed with a '#' character.
   *
   * @return {void} This function does not return anything.
   */
  onScroll() {
    const scrollPosition = window.scrollY;

    this.sections.forEach(section => {
      const sectionElement = document.querySelector(`#${section.id}`);
      if (sectionElement) {
        const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = (sectionElement as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight - 200) {
          this.currentSection = section.id;
        }
      }
    });
    this.currentRoute = this.currentSection ? '#' + this.currentSection : '';
  }


  /**
   * Scrolls the window to the specified section on the page.
   *
   * @param {Event} event - The event that triggered the scroll action.
   * @param {string} sectionId - The ID of the section to scroll to.
   * @return {void} This function does not return anything.
   */
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.offsetTop - 150;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }
}
