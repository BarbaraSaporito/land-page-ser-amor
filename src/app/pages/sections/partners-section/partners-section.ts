import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from '../../../shared/card/card';
import { SectionCard } from '../../../core/models/section-card.model';
import { Button } from '../../../shared/button/button';

@Component({
  selector: 'app-partners-section',
  standalone: true,
  imports: [CardComponent, Button],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--white">
      <div class="container">
        <h2 class="section-title pink">PARCEIROS</h2>

        <p class="section-description">
          Empresas e instituições que caminham junto com a nossa missão.
        </p>

        <div class="grid">
          @for (partner of partners(); track partner.id) {
            <app-card [card]="partner" />
          }
        </div>

        <div class="section-action">
          <app-button label="Saiba mais" variant="warn" />
        </div>
      </div>
    </section>

  `
})
export class PartnersSection {
  readonly partners = signal<SectionCard[]>([
    { id: 'pr1', imageUrl: 'assets/images/partner1.jpg' },
    { id: 'pr2', imageUrl: 'assets/images/partner2.jpg' },
    { id: 'pr3', imageUrl: 'assets/images/partner3.jpg' }
  ]);
}
