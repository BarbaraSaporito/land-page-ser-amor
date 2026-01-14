import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-surface-card',
  standalone: true,
  imports: [MatCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card class="surface-card">
      <ng-content />
    </mat-card>
  `,
  styleUrl: './surface-card.css'
})
export class SurfaceCardComponent {}
