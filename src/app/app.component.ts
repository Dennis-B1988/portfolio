import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { ContactFormComponent } from './main/contact/contact-form/contact-form.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ContactFormComponent, ImprintComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  scrollToContacts() {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
