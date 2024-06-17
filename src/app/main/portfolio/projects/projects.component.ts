import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Portfolio } from '../../../interfaces/interfaces.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  project: Portfolio[] = [
    {
      image: './assets/img/el_pollo_loco.png',
      image_hover: './assets/img/el_pollo_loco-screenshot.png',
      name: 'El Pollo Loco',
      url: '',
      github: 'https://github.com/Dennis-B1988/EL_POLLO_LOCO',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      skills: 'JavaScript | HTML | CSS',
      hover: false,
    },
    {
      image: './assets/img/join.png',
      image_hover: './assets/img/join-screenshot.png',
      name: 'Join',
      url: '',
      github: 'https://github.com/Dennis-B1988/join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      skills: 'JavaScript | HTML | CSS',
      hover: false,
    },
    {
      image: './assets/img/pokedex.png',
      image_hover: './assets/img/pokedex-screenshot.png',
      name: 'Pokédex',
      url: '',
      github: 'https://github.com/Dennis-B1988/pokedex',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information',
      skills: 'JavaScript | HTML | CSS | Api',
      hover: false,
    },
  ]
}
