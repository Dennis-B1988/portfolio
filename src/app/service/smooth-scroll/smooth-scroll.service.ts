import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {

  constructor() { }

  /**
   * Scrolls the window to the specified position smoothly.
   * @param x The x-coordinate to scroll to.
   * @param y The y-coordinate to scroll to.
   */
  smoothScrollTo(x: number, y: number) {
    window.scrollTo({
      top: y,
      left: x,
      behavior: 'smooth'
    });
  }
}
