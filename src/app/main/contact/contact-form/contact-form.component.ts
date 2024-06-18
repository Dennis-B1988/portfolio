import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../service/translation.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, RouterModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {

  translate = inject(TranslationService);

  name: string = 'Dein Name';
  email: string = 'Deine Email';
  message: string = 'Deine Nachricht';
  isFocused: boolean = false;
  checkmark: boolean = false;


  constructor(private translationService: TranslationService, private router: Router) {}


  ngOnInit() {
    this.translationService.currentLang$.subscribe(lang => {
      this.changePlaceholder(lang);
    });
  }


  changePlaceholder(lang: string) {
    this.name = lang === 'de' ? 'Dein Name' : 'Your name';
    this.email = lang === 'de' ? 'Deine Email' : 'Your email';
    this.message = lang === 'de' ? 'Deine Nachricht' : 'Your message';
  }


  contactPlaceholderGerman(){
    this.name = 'Dein Name';
    this.email = 'Deine Email';
    this.message = 'Deine Nachricht';
  }


  contactPlaceholderEnglish(){
    this.name = 'Your name';
    this.email = 'Your email';
    this.message = 'Your message';
  }


  clearPlaceholderName() {
    if (this.name === 'Your name' || this.name === 'Dein Name') {
      this.name = ''; 
    }
  }


  isValidName(): boolean {
    return this.name.length >= 2 && this.name !== 'Your name' && this.name !== 'Dein Name';
  }


  clearPlaceholderEmail() {
    if (this.email === 'Your email' || this.email === 'Deine Email') {
      this.email = '';
    }
  }


  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }


  clearPlaceholderMessage() {
    if (this.message === 'Your message' || this.message === 'Deine Nachricht') {
      this.message = '';
    }
  }


  isValidMessage(): boolean {
    return this.message.length >= 5 && this.message !== 'Your message' && this.message !== 'Deine Nachricht';
  }


  toggleCheckmark() {
    if (this.checkmark == false) {
      this.checkmark = true;
    } else if (this.checkmark == true) {
      this.checkmark = false;
    }
  }


  messageSend() {
    if (this.checkmark == true && this.isValidName() && this.isValidEmail(this.email) && this.isValidMessage()) {
      if(this.translate['translate'].currentLang == 'en'){
        this.contactPlaceholderEnglish();
      } else if(this.translate['translate'].currentLang == 'de'){
        this.contactPlaceholderGerman();
      }
      this.checkmark = false;
    }
  }


  navigateToPrivacy() {
    this.router.navigate(['/privacy-policy']);
  }
}
