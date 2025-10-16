import { HttpClient } from "@angular/common/http";
import { Pipe, PipeTransform } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";

/* -------------------------------------------------------------------------- */
/* 🗣️ Mock Pipe: | translate                                                  */
/* -------------------------------------------------------------------------- */
@Pipe({ name: "translate" })
export class MockTranslatePipe implements PipeTransform {
  transform(value: string): string {
    return value; // Just return key instead of translated text
  }
}

/* -------------------------------------------------------------------------- */
/* 🧠 Mock TranslateService (used inside TranslationService)                   */
/* -------------------------------------------------------------------------- */
export class MockTranslateService {
  currentLang = "en";
  onLangChange = of({ lang: "en" });
  onTranslationChange = of({});
  onDefaultLangChange = of({});

  setDefaultLang(lang: string) {}
  use(lang: string) {
    this.currentLang = lang;
  }
  get(key: string) {
    return of(key);
  }
  instant(key: string) {
    return key;
  }
}

/* -------------------------------------------------------------------------- */
/* 🌐 Mock TranslationService wrapper (your custom service)                    */
/* -------------------------------------------------------------------------- */
export class MockTranslationService {
  currentLang$ = of("de");

  switchLanguage(lang: string) {}
  setLanguage(lang: string) {}
  getCurrentLanguage() {
    return "de";
  }
}

/* -------------------------------------------------------------------------- */
/* 🔗 Mock ActivatedRoute                                                     */
/* -------------------------------------------------------------------------- */
export const mockActivatedRoute = {
  queryParams: of({}),
} as Partial<ActivatedRoute>;

/* -------------------------------------------------------------------------- */
/* 🌍 Mock HttpClient (basic no-op stubs)                                     */
/* -------------------------------------------------------------------------- */
export const mockHttpClient = {
  get: () => of({}),
  post: () => of({}),
  put: () => of({}),
  delete: () => of({}),
} as unknown as Partial<HttpClient>;

// in src/testing/mocks.ts
export function provideDefaultMocks() {
  return [
    { provide: TranslateService, useClass: MockTranslateService },
    { provide: HttpClient, useValue: mockHttpClient },
    { provide: ActivatedRoute, useValue: mockActivatedRoute },
  ];
}
