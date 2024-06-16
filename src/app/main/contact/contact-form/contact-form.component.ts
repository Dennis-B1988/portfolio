import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  name: string = 'Your name';
  email: string = 'Your email';
  message: string = 'Your message';
  isFocused: boolean = false;

  checkmark: boolean = false;


  clearPlaceholderName() {
    if (this.name === 'Your name') {
      this.name = '';
    }
  }


  isValidName(): boolean {
    return this.name.length >= 2 && this.name !== 'Your name';
  }


  clearPlaceholderEmail() {
    if (this.email === 'Your email') {
      this.email = '';
    }
  }


  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }


  clearPlaceholderMessage() {
    if (this.message === 'Your message') {
      this.message = '';
    }
  }


  isValidMessage(): boolean {
    return this.message.length >= 5 && this.message !== 'Your message';
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
      console.log(this.name);
      console.log(this.email);
      console.log(this.message);
      this.name = 'Your name';
      this.email = 'Your email';
      this.message = 'Your message';
      this.checkmark = false;
    }
  }
}
