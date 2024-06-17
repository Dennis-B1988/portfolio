import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _currentLang = new BehaviorSubject<string>('de');
  currentLang$ = this._currentLang.asObservable();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    this._currentLang.next(language);
  }

  get currentLang() {
    return this._currentLang.value;
  }
}

