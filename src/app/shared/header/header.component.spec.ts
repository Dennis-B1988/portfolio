import { ComponentFixture, TestBed } from "@angular/core/testing";

import { provideDefaultMocks } from "../../../tests/mocks";
import { SmoothScrollService } from "../../service/smooth-scroll/smooth-scroll.service";
import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [...provideDefaultMocks()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call checkWindowSize on window resize", () => {
    const spy = spyOn(component, "checkWindowSize");
    window.dispatchEvent(new Event("resize"));
    expect(spy).toHaveBeenCalled();
  });
});
