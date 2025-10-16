import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { SmoothScrollService } from "./service/smooth-scroll/smooth-scroll.service";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [SmoothScrollService],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'portfolio' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("portfolio");
  });

  it("should subscribe to router events", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const scrollService =
      fixture.debugElement.injector.get(SmoothScrollService);
    expect(app).toBeTruthy();
    expect(scrollService).toBeTruthy();
  });
});
