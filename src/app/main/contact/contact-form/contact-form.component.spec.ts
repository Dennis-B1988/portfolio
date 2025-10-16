import { ComponentFixture, TestBed } from "@angular/core/testing";

import { provideDefaultMocks } from "../../../../tests/mocks";
import { ContactComponent } from "../contact.component";
import { ContactFormComponent } from "./contact-form.component";

describe("ContactFormComponent", () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormComponent],
      providers: [ContactComponent, ...provideDefaultMocks()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
