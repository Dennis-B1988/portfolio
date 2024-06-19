import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<string>('en');
  currentLang$ = this.currentLangSubject.asObservable();


  get currentLang(): string {
    return this.currentLangSubject.getValue();
  }


  setLanguage(lang: string) {
    this.currentLangSubject.next(lang);
  }


  switchLanguage(lang: string) {
    this.setLanguage(lang);
  }
  

  getCurrentLanguage(): string {
    return this.currentLangSubject.getValue();
  }
}

