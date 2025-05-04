import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SendMessageService {
  sendSuccessVisible = signal<boolean>(false);
}
