import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SendMessageService } from '../../service/send-message/send-message.service';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ContactFormComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('sendSuccessAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', [
        animate('0.5s ease-in')
      ]),
      transition('visible => hidden', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class ContactComponent {

  sendMessage = inject(SendMessageService);


/**
 * Shows the send success message and hides it after a delay of 2000 milliseconds.
 *
 * @return {void} This function does not return a value.
 */
  showSendSuccess() {
    this.sendMessage.sendSuccessVisible = true;
    setTimeout(() => {
      this.sendMessage.sendSuccessVisible = false;
    }, 2000);
  }
  
}
