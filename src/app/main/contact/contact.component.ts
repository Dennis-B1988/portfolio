import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

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


  putPlaceholderName() {
    if (this.name === '') {
      this.name = 'Your name';
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


  putPlaceholderEmail() {
    if (this.email === '') {
      this.email = 'Your email';
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


  putPlaceholderMessage() {
    if (this.message === '') {
      this.message = 'Your message';
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
      alert('Your message has been sent!');
      this.name = 'Your name';
      this.email = 'Your email';
      this.message = 'Your message';
      this.checkmark = false;
    }
  }
}
