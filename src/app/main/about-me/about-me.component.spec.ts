import { ComponentFixture, TestBed } from "@angular/core/testing";

import { provideDefaultMocks } from "../../../tests/mocks";
import { AboutMeComponent } from "./about-me.component";

describe("AboutMeComponent", () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeComponent],
      providers: [...provideDefaultMocks()],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
