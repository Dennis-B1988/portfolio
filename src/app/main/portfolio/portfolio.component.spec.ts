import { ComponentFixture, TestBed } from "@angular/core/testing";

import { provideDefaultMocks } from "../../../tests/mocks";
import { PortfolioComponent } from "./portfolio.component";

describe("PortfolioComponent", () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioComponent],
      providers: [...provideDefaultMocks()],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
