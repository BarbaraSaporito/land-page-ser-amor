import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app--activities-summary',
  imports: [],
  template: `<p> activities-summary works!</p>`,
  styleUrl: './ activities-summary.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesSummary { }
