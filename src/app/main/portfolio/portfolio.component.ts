import { Component } from '@angular/core';
import { Portfolio } from '../../interfaces/interfaces.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolio: Portfolio[] = [
    {
      image: './assets/img/el_pollo_loco.png',
      name: 'EL POLLO LOCO',
      url: '',
      github: 'https://github.com/Dennis-B1988/EL_POLLO_LOCO'
    },
    {
      image: './assets/img/join.png',
      name: 'JOIN',
      url: '',
      github: 'https://github.com/Dennis-B1988/join'
    },
    {
      image: './assets/img/pokedex.png',
      name: 'Pokedex',
      url: '',
      github: 'https://github.com/Dennis-B1988/pokedex'
    },
    {
      image: '',
      name: 'Placeholder',
      url: '',
      github: ''
    },
  ]
}
