import { Component, HostListener, OnInit, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { CheckLanguageService } from "../../service/check-language/check-language.service";
import { TranslationService } from "../../service/translation.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  router = inject(Router);
  translate = inject(TranslationService);
  languages = inject(CheckLanguageService);

  currentRoute: string = "";
  burgerMenuOpen: boolean = false;
  isMenuOpen: boolean = false;
  currentSection: string = "";
  sections: { id: string; className: string }[] = [
    { id: "about-me", className: "about-me" },
    { id: "skills", className: "skills" },
    { id: "portfolio", className: "portfolio" },
    { id: "contacts", className: "contact" },
  ];

  /**
   * Initializes the component and sets the current route based on the router's URL.
   *
   * Listens to the router's events and updates the currentRoute property whenever the URL changes.
   *
   * @return {void} This function does not return anything.
   */
  constructor() {
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
   * Toggles the mobile menu.
   *
   * Sets the `isMenuOpen` and `burgerMenuOpen` properties to their opposite values.
   * If `burgerMenuOpen` is true, it also sets the `overflow` CSS property of the
   * document body to "hidden", and sets it to "unset" if it is false.
   *
   * @return {void} This function does not return anything.
   */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.burgerMenuOpen = !this.burgerMenuOpen;
    document.body.style.overflow = this.burgerMenuOpen ? "hidden" : "unset";
  }

  @HostListener("window:resize", ["$event"])
  /**
   * Calls the `checkWindowSize` method to update the window size.
   *
   * @return {void} This function does not return anything.
   */
  onResize() {
    this.checkWindowSize();
  }

  /**
   * Checks the current window size and updates the menu visibility and overflow style of the body accordingly.
   * If the window width is greater than 767px, the menu is closed, the body overflow is set to "unset" and the
   * burger menu is closed.
   *
   * @return {void} This function does not return anything.
   */
  checkWindowSize() {
    if (window.innerWidth > 767) {
      this.burgerMenuOpen = false;
      this.isMenuOpen = false;
      document.body.style.overflow = "unset";
    }
  }

  /**
   * Checks the current language and updates the language flags and translates the page accordingly.
   *
   * @return {void} This function does not return anything.
   */
  checkLanguage() {
    const lang = this.translate.currentLang;
    this.languages.languageGerman = lang === "de";
    this.languages.languageEnglish = lang === "en";
    this.translate.switchLanguage(lang);
  }

  @HostListener("window:scroll", ["$event"])
  /**
   * Updates the current route based on the current scroll position.
   *
   * This function iterates over an array of section IDs and checks if the current scroll position is within the range of each section. If it is, the current section ID is stored in the `currentSection` variable. Finally, the `currentRoute` property is updated with the corresponding section ID prefixed with a '#' character.
   *
   * @return {void} This function does not return anything.
   */
  onScroll() {
    const scrollPosition = window.scrollY;

    this.sections.forEach((section) => {
      const sectionElement = document.querySelector(`#${section.id}`);
      if (sectionElement) {
        const sectionTop =
          sectionElement.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = (sectionElement as HTMLElement).offsetHeight;

        if (
          scrollPosition >= sectionTop - 200 &&
          scrollPosition < sectionTop + sectionHeight - 200
        ) {
          this.currentSection = section.id;
        }
      }
    });
    this.currentRoute = this.currentSection ? "#" + this.currentSection : "";
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
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  }
}
