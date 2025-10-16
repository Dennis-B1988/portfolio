import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MockTranslatePipe, provideDefaultMocks } from "../../tests/mocks";
import { SmoothScrollService } from "../service/smooth-scroll/smooth-scroll.service";
import { MainComponent } from "./main.component";

describe("MainComponent", () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent, BrowserAnimationsModule],
      declarations: [MockTranslatePipe],
      providers: [SmoothScrollService, ...provideDefaultMocks()],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call scrollToContacts when scrollDown is called", () => {
    const smoothScrollService = TestBed.inject(SmoothScrollService);
    const spy = spyOn(smoothScrollService, "scrollToContacts");
    component.scrollDown();
    expect(spy).toHaveBeenCalled();
  });
});
