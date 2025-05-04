import { AfterViewInit, Component, inject } from "@angular/core";
import { CheckLanguageService } from "../service/check-language/check-language.service";
import { SmoothScrollService } from "../service/smooth-scroll/smooth-scroll.service";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { EnglishComponent } from "./english/english.component";
import { GermanComponent } from "./german/german.component";

@Component({
  selector: "app-imprint",
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    GermanComponent,
    EnglishComponent,
  ],
  templateUrl: "./imprint.component.html",
  styleUrl: "./imprint.component.scss",
})
export class ImprintComponent implements AfterViewInit {
  private smoothScrollService = inject(SmoothScrollService);
  languages = inject(CheckLanguageService);

  ngAfterViewInit() {
    this.smoothScrollService.smoothScrollTo(0, 0);
  }
}
