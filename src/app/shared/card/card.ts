import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SectionCard } from '../../core/models/section-card.model';

@Component({
  selector: 'app-card',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
   <div class="card">
      @if (card.imageUrl) {
        <img [src]="card.imageUrl" alt="" />
      }

      @if (card.title) {
        <h3>{{ card.title }}</h3>
      }

      @if (card.description) {
        <p>{{ card.description }}</p>
      }
    </div>
  `,
})
export class CardComponent {
  @Input({ required: true }) card!: SectionCard;

}
