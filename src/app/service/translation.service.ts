import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<string>('de');
  currentLang$ = this.currentLangSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
    this.translate.use(this.currentLangSubject.value);
  }

  get currentLang(): string {
    return this.currentLangSubject.getValue();
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLangSubject.next(lang);
  }

  switchLanguage(lang: string) {
    this.setLanguage(lang);
  }

  getCurrentLanguage(): string {
    return this.currentLangSubject.getValue();
  }
}


