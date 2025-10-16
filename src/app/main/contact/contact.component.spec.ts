import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideDefaultMocks } from "../../../tests/mocks";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ContactComponent } from "./contact.component";

describe("ContactComponent", () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, BrowserAnimationsModule],
      providers: [ContactFormComponent, ...provideDefaultMocks()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
