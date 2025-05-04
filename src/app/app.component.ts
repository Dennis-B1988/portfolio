import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from "@angular/core";
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from "@angular/router";
import { SmoothScrollService } from "./service/smooth-scroll/smooth-scroll.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private smoothScrollService = inject(SmoothScrollService);
  private destroyRef = inject(DestroyRef);

  title = "portfolio";

  /**
   * Initializes the component and subscribes to the router's events.
   * When the URL changes, scrolls to the top of the page.
   * Unsubscribes from the router's events when the component is destroyed.
   * @return {void} This function does not return anything.
   */
  ngOnInit() {
    const subscribe = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.smoothScrollService.smoothScrollTo(0, 0);
      }
    });

    this.destroyRef.onDestroy(() => subscribe.unsubscribe());
  }
}
