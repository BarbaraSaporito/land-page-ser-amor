import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SectionCard } from '../../../core/models/section-card.model';
import { CardComponent } from '../../../shared/card/card';
import { Button } from '../../../shared/button/button';


@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CardComponent, Button],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--white">
      <div class="container">
        <h2 class="section-title green">PROJETOS</h2>

        <p class="section-description">
          Conheça alguns dos projetos sociais que estamos desenvolvendo.
        </p>

        <div class="grid">
          @for (project of projects(); track project.id) {
            <app-card [card]="project" />
          }
        </div>

        <div class="section-action">
          <app-button label="Saiba mais" variant="accent" />
        </div>
      </div>
    </section>

  `
})
export class ProjectsSection {
  readonly projects = signal<SectionCard[]>([
    { id: 'p1', imageUrl: 'assets/images/project1.jpg' },
    { id: 'p2', imageUrl: 'assets/images/project2.jpg' },
    { id: 'p3', imageUrl: 'assets/images/project3.jpg' }
  ]);
}
