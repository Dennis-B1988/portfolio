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
      image: '',
      name: 'Portfolio 1',
      url: 'https://dennis-portfolio-1.netlify.app/'
    },
    {
      image: '',
      name: 'Portfolio 2',
      url: 'https://dennis-portfolio-2.netlify.app/'
    },
    {
      image: '',
      name: 'Portfolio 3',
      url: 'https://dennis-portfolio-3.netlify.app/'
    },
    {
      image: '',
      name: 'Portfolio 4',
      url: 'https://dennis-portfolio-4.netlify.app/'
    },
  ]
}
