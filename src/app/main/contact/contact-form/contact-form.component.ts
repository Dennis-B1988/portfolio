import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { TranslationService } from "../../../service/translation.service";
import { ContactComponent } from "../contact.component";

@Component({
  selector: "app-contact-form",
  standalone: true,
  imports: [FormsModule, RouterModule, TranslateModule],
  templateUrl: "./contact-form.component.html",
  styleUrl: "./contact-form.component.scss",
})
export class ContactFormComponent implements OnInit {
  private translate = inject(TranslationService);
  private router = inject(Router);
  private http = inject(HttpClient);
  contact = inject(ContactComponent);

  placeholderName: string = "Dein Name";
  placeholderEmail: string = "Deine Email";
  placeholderMessage: string = "Deine Nachricht";
  isFocused: boolean = false;
  checkmark: boolean = false;

  contactData = {
    name: "",
    email: "",
    message: "",
  };

  mailTest: boolean = false;

  post = {
    endPoint: "https://www.dennis-baust.com/sendMail.php",
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        "Content-Type": "text/plain",
        responseType: "text",
      },
    },
  };

  /**
   * Initializes the component and subscribes to the current language subject from the translation service.
   * When the language changes, the `changePlaceholder` method is called with the new language as an argument.
   *
   * @return {void} This function does not return anything.
   */
  ngOnInit() {
    this.translate.currentLang$.subscribe((lang) => {
      this.changePlaceholder(lang);
    });
  }

  /**
   * Submits the form if it is valid and not in test mode.
   * If the form is valid and not in test mode, sends a POST request to the endpoint with the contact data.
   * If the request is successful, logs 'send post complete' to the console.
   * Resets the form after submission.
   * If the form is valid and in test mode, resets the form.
   *
   * @param {NgForm} ngForm - The form to be submitted.
   * @return {void} This function does not return anything.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {},
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info("send post complete"),
        });
      this.resetForm(ngForm);
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.resetForm(ngForm);
    }
  }

  /**
   * Emits the ngSubmit event of the provided NgForm.
   *
   * @param {NgForm} form - The NgForm whose ngSubmit event will be emitted.
   */
  onExternalSubmit(form: NgForm) {
    form.ngSubmit.emit();
  }

  /**
   * Resets the form and clears the contact data.
   *
   * @param {NgForm} ngForm - The form to be reset.
   * @return {void} This function does not return anything.
   */
  resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.changePlaceholder(this.translate.getCurrentLanguage());
    this.contactData = { name: "", email: "", message: "" };
    this.checkmark = false;
  }

  /**
   * Updates the source of the image element based on the value of the checkmark.
   *
   * @param {HTMLImageElement} img - The image element whose source will be updated.
   * @return {void} This function does not return a value.
   */
  onMouseOver(img: HTMLImageElement) {
    img.src = this.checkmark
      ? "./assets/img/checkbox-checked-hover.png"
      : "./assets/img/checkbox-unchecked-hover.png";
  }

  /**
   * Updates the source of the image element based on the value of the checkmark.
   *
   * @param {HTMLImageElement} img - The image element whose source will be updated.
   * @return {void} This function does not return a value.
   */
  onMouseOut(img: HTMLImageElement) {
    img.src = this.checkmark
      ? "./assets/img/checkbox-checked.png"
      : "./assets/img/checkbox-unchecked.png";
  }

  /**
   * Updates the placeholder text based on the language.
   *
   * @param {string} lang - The language code.
   * @return {void}
   */
  changePlaceholder(lang: string) {
    this.placeholderName = lang === "de" ? "Dein Name" : "Your name";
    this.placeholderEmail = lang === "de" ? "Deine Email" : "Your email";
    this.placeholderMessage =
      lang === "de" ? "Deine Nachricht" : "Your message";
  }

  /**
   * Sets the placeholder texts to German language values.
   *
   * @param {} - No parameters.
   * @return {} - No return value.
   */
  contactPlaceholderGerman() {
    this.placeholderName = "Dein Name";
    this.placeholderEmail = "Deine Email";
    this.placeholderMessage = "Deine Nachricht";
  }

  /**
   * Sets the placeholder text for the name, email, and message fields to their English translations.
   *
   * @return {void} This function does not return a value.
   */
  contactPlaceholderEnglish() {
    this.placeholderName = "Your name";
    this.placeholderEmail = "Your email";
    this.placeholderMessage = "Your message";
  }

  /**
   * Clears the placeholder name if it matches 'Your name' or 'Dein Name'.
   *
   * @param {} - No parameters.
   * @return {} - No return value.
   */
  clearPlaceholderName() {
    if (
      this.placeholderName === "Your name" ||
      this.placeholderName === "Dein Name"
    ) {
      this.placeholderName = "";
    }
  }

  /**
   * Checks if the name is valid.
   *
   * @return {boolean} True if the name is valid, false otherwise.
   */
  isValidName(): boolean {
    const minLength = 2;
    const isPlaceholderName =
      this.placeholderName === "Your name" ||
      this.placeholderName === "Dein Name";
    return this.contactData.name.length >= minLength && !isPlaceholderName;
  }

  /**
   * Clears the placeholder email if it matches 'Your email' or 'Deine Email'.
   *
   * @param {} - No parameters.
   * @return {} - No return value.
   */
  clearPlaceholderEmail() {
    if (
      this.placeholderEmail === "Your email" ||
      this.placeholderEmail === "Deine Email"
    ) {
      this.placeholderEmail = "";
    }
  }

  /**
   * Checks if the given email is valid.
   *
   * @param {string} email - The email to be validated.
   * @return {boolean} True if the email is valid, false otherwise.
   */
  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  /**
   * Clears the placeholder message if it is equal to 'Your message' or 'Deine Nachricht'.
   *
   * @return {void} This function does not return a value.
   */
  clearPlaceholderMessage() {
    if (
      this.placeholderMessage === "Your message" ||
      this.placeholderMessage === "Deine Nachricht"
    ) {
      this.placeholderMessage = "";
    }
  }

  /**
   * Checks if the message is valid.
   *
   * @return {boolean} True if the message is valid, false otherwise.
   */
  isValidMessage(): boolean {
    const minLength = 5;
    const isPlaceholderMessage =
      this.placeholderMessage === "Your message" ||
      this.placeholderMessage === "Deine Nachricht";
    return (
      this.contactData.message.length >= minLength && !isPlaceholderMessage
    );
  }

  /**
   * Toggles the value of the checkmark property.
   *
   * This function updates the value of the `checkmark` property by negating its current value.
   *
   * @return {void} This function does not return a value.
   */
  toggleCheckmark() {
    this.checkmark = !this.checkmark;
  }

  /**
   * Navigates to the privacy policy page.
   *
   * @return {void} This function does not return a value.
   */
  navigateToPrivacy() {
    this.router.navigate(["/privacy-policy"]);
  }
}
