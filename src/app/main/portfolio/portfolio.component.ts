import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  
}
