import { inject, Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TranslationService {
  private translateService = inject(TranslateService);
  private currentLangSubject = new BehaviorSubject<string>("de");
  currentLang$ = this.currentLangSubject.asObservable();

  /**
   * Initializes a new instance of the TranslationService class.
   *
   * Sets the default language for translation to "de" and initializes the translation service
   * with the current language from the currentLangSubject.
   */
  constructor() {
    this.translateService.setDefaultLang("de");
    this.translateService.use(this.currentLangSubject.value);
  }

  /**
   * Get the current language value.
   *
   * @return {string} The current language value.
   */
  get currentLang(): string {
    return this.currentLangSubject.getValue();
  }

  /**
   * Sets the language for translation and updates the current language subject.
   *
   * @param {string} lang - The language code to set.
   */
  setLanguage(lang: string) {
    this.translateService.use(lang);
    this.currentLangSubject.next(lang);
  }

  /**
   * Switches the language to the specified language.
   *
   * @param {string} lang - The language code to switch to.
   * @return {void} This function does not return anything.
   */
  switchLanguage(lang: string) {
    this.setLanguage(lang);
  }

  /**
   * Get the current language value.
   *
   * @return {string} The current language value.
   */
  getCurrentLanguage(): string {
    return this.currentLangSubject.getValue();
  }
}
