import { Component, inject } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { Skills } from "../../interfaces/interfaces.component";
import { SmoothScrollService } from "../../service/smooth-scroll/smooth-scroll.service";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [TranslateModule],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.scss",
})
export class SkillsComponent {
  private smoothScrollService = inject(SmoothScrollService);

  skill: Skills[] = [
    {
      image: "./assets/img/JavaScript.png",
      name: "JavaScript",
    },
    {
      image: "./assets/img/Angular.png",
      name: "Angular",
    },
    {
      image: "./assets/img/TypeScript.png",
      name: "TypeScript",
    },
    {
      image: "./assets/img/Rest-Api.png",
      name: "Rest-Api",
    },
    {
      image: "./assets/img/HTML.png",
      name: "HTML",
    },
    {
      image: "./assets/img/CSS.png",
      name: "CSS",
    },
    {
      image: "./assets/img/Firebase.png",
      name: "Firebase",
    },
    {
      image: "./assets/img/GIT.png",
      name: "GIT",
    },
    {
      image: "./assets/img/Scrum.png",
      name: "Scrum",
    },
    {
      image: "./assets/img/Material-design.png",
      name: "Material design",
    },
  ];

  /**
   * Scrolls down to the contacts section.
   *
   */
  scrollDown() {
    this.smoothScrollService.scrollToContacts();
  }
}
