import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SendMessageService } from '../../../service/send-message/send-message.service';
import { TranslationService } from '../../../service/translation.service';
import { ContactComponent } from '../contact.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, RouterModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {

  translate = inject(TranslationService);
  http = inject(HttpClient);
  contact = inject(ContactComponent);

  placeholderName: string = 'Dein Name';
  placeholderEmail: string = 'Deine Email';
  placeholderMessage: string = 'Deine Nachricht';
  isFocused: boolean = false;
  checkmark: boolean = false;

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  mailTest = true;

  post = {
    endPoint: 'https://dennis-baust.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  constructor(private translationService: TranslationService, private router: Router) {}


  ngOnInit() {
    this.translationService.currentLang$.subscribe(lang => {
      this.changePlaceholder(lang);
    });
  }


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
      this.resetForm(ngForm);
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.resetForm(ngForm);
    }
  }


  onExternalSubmit(form: NgForm) {
    form.ngSubmit.emit();
  }


  resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.changePlaceholder(this.translationService.getCurrentLanguage());
    this.contactData = { name: '', email: '', message: '' };
    this.checkmark = false;
  }


  onMouseOver(img: HTMLImageElement) {
    img.src = this.checkmark
      ? './assets/img/checkbox-checked-hover.png'
      : './assets/img/checkbox-unchecked-hover.png';
  }

  onMouseOut(img: HTMLImageElement) {
    img.src = this.checkmark
      ? './assets/img/checkbox-checked.png'
      : './assets/img/checkbox-unchecked.png';
  }


  changePlaceholder(lang: string) {
    this.placeholderName = lang === 'de' ? 'Dein Name' : 'Your name';
    this.placeholderEmail = lang === 'de' ? 'Deine Email' : 'Your email';
    this.placeholderMessage = lang === 'de' ? 'Deine Nachricht' : 'Your message';
  }


  contactPlaceholderGerman(){
    this.placeholderName = 'Dein Name';
    this.placeholderEmail = 'Deine Email';
    this.placeholderMessage = 'Deine Nachricht';
  }


  contactPlaceholderEnglish(){
    this.placeholderName = 'Your name';
    this.placeholderEmail = 'Your email';
    this.placeholderMessage = 'Your message';
  }


  clearPlaceholderName() {
    if (this.placeholderName === 'Your name' || this.placeholderName === 'Dein Name') {
      this.placeholderName = ''; 
    }
  }


  isValidName(): boolean {
    return this.contactData.name.length >= 2 && this.placeholderName !== 'Your name' && this.placeholderName !== 'Dein Name';
  }


  clearPlaceholderEmail() {
    if (this.placeholderEmail === 'Your email' || this.placeholderEmail === 'Deine Email') {
      this.placeholderEmail = '';
    }
  }


  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }


  clearPlaceholderMessage() {
    if (this.placeholderMessage === 'Your message' || this.placeholderMessage === 'Deine Nachricht') {
      this.placeholderMessage = '';
    }
  }


  isValidMessage(): boolean {
    return this.contactData.message.length >= 5 && this.placeholderMessage !== 'Your message' && this.placeholderMessage !== 'Deine Nachricht';
  }


  toggleCheckmark() {
    if (this.checkmark == false) {
      this.checkmark = true;
    } else if (this.checkmark == true) {
      this.checkmark = false;
    }
  }


  navigateToPrivacy() {
    this.router.navigate(['/privacy-policy']);
  }
}
