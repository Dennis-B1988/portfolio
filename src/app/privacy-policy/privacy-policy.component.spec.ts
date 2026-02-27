import { ComponentFixture, TestBed } from "@angular/core/testing";

import { provideDefaultMocks } from "../../tests/mocks";
import { SmoothScrollService } from "../service/smooth-scroll/smooth-scroll.service";
import { PrivacyPolicyComponent } from "./privacy-policy.component";

describe("PrivacyPolicyComponent", () => {
  let component: PrivacyPolicyComponent;
  let fixture: ComponentFixture<PrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyComponent],
      providers: [SmoothScrollService, ...provideDefaultMocks()],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should scroll to the top after view init", () => {
    const smoothScrollService = TestBed.inject(SmoothScrollService);
    const spy = spyOn(smoothScrollService, "smoothScrollTo");
    component.ngAfterViewInit();
    expect(spy).toHaveBeenCalledWith(0, 0);
  });
});
