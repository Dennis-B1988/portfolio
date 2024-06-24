import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SmoothScrollService } from './service/smooth-scroll/smooth-scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private smoothScrollService: SmoothScrollService) {}
  
  title = 'portfolio';


  /**
   * Initializes the component and subscribes to the router events. When a NavigationEnd event is
   * emitted, it calls the smoothScrollTo method of the smoothScrollService to scroll to the top of
   * the page.
   *
   * @return {void} This function does not return anything.
   */
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.smoothScrollService.smoothScrollTo(0, 0);
      }
    });
  }

  
/**
 * Scrolls the page to the element with the ID 'contacts' if it exists.
 *
 * @return {void} This function does not return a value.
 */
  scrollToContacts() {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
