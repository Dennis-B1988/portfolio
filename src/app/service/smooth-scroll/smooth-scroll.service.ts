import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SmoothScrollService {
  constructor() {}

  /**
   * Scrolls the window to the specified position smoothly.
   * @param x The x-coordinate to scroll to.
   * @param y The y-coordinate to scroll to.
   */
  smoothScrollTo(x: number, y: number) {
    window.scrollTo({
      top: y,
      left: x,
      behavior: "smooth",
    });
  }

  /**
   * Smoothly scrolls the window to the contacts section.
   *
   * This function retrieves the element with the ID 'contacts' and, if found,
   * smoothly scrolls it into the viewport.
   */
  scrollToContacts() {
    const element = document.getElementById("contacts");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
