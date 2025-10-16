import { ComponentFixture, TestBed } from "@angular/core/testing";

import { provideDefaultMocks } from "../../tests/mocks";
import { SmoothScrollService } from "../service/smooth-scroll/smooth-scroll.service";
import { ImprintComponent } from "./imprint.component";

describe("ImprintComponent", () => {
  let component: ImprintComponent;
  let fixture: ComponentFixture<ImprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprintComponent],
      providers: [SmoothScrollService, ...provideDefaultMocks()],
    }).compileComponents();

    fixture = TestBed.createComponent(ImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
