import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-activities-grid',
  imports: [],
  template: `<p>activities-grid works!</p>`,
  styleUrl: './activities-grid.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesGrid { }
