import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from '../../../shared/card/card';
import { SectionCard } from '../../../core/models/section-card.model';
import { Button } from '../../../shared/button/button';

@Component({
  selector: 'app-activities-section',
  imports: [CardComponent, Button],
  styleUrl: './activities-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--white">
      <div class="container">
        <h2 class="section-title yellow">ATIVIDADES</h2>

        <p class="section-description">
          Conheça algumas das atividades realizadas pela nossa organização
          junto à comunidade.
        </p>

        <div class="grid">
          @for (activity of activities(); track activity.id) {
            <app-card [card]="activity" />
          }
        </div>

        <div class="section-action">
          <app-button label="Saiba mais" variant="accent" />
        </div>
      </div>
    </section>


    `,
})
export class ActivitiesSection {
  readonly activities = signal<SectionCard[]>([
    { id: '1', imageUrl: 'assets/images/act1.jpg' },
    { id: '2', imageUrl: 'assets/images/act2.jpg' },
    { id: '3', imageUrl: 'assets/images/act3.jpg' }
  ]);
}
