import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { CheckLanguageService } from "../service/check-language/check-language.service";
import { SmoothScrollService } from "../service/smooth-scroll/smooth-scroll.service";
import { TranslationService } from "../service/translation.service";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ContactComponent } from "./contact/contact.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { SkillsComponent } from "./skills/skills.component";
import { ScrollDownComponent } from "./socials-scroll/scroll-down/scroll-down.component";
import { SocialsComponent } from "./socials-scroll/socials/socials.component";

@Component({
  selector: "app-main",
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
    RouterModule,
    TranslateModule,
  ],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss",
})
export class MainComponent {
  private smoothScrollService = inject(SmoothScrollService);
  translate = inject(TranslationService);
  languages = inject(CheckLanguageService);

  currentRoute: string = "";
  // isMenuOpen = false;

  /**
   * Scrolls down to the contacts section.
   *
   * @return {void} This function does not return a value.
   */
  scrollDown() {
    this.smoothScrollService.scrollToContacts();
  }

  /**
   * Toggles the menu open/closed by negating the current state.
   *
   * @return {void} This function does not return a value.
   */
  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
}
