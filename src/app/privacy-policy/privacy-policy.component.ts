import { Component, inject } from '@angular/core';
import { CheckLanguageService } from '../service/check-language/check-language.service';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { EnglishComponent } from './english/english.component';
import { GermanComponent } from './german/german.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, GermanComponent, EnglishComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  languages = inject(CheckLanguageService);
}
