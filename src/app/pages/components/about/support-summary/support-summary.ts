import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-support-summary',
  imports: [],
  template: `<p>support-summary works!</p>`,
  styleUrl: './support-summary.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportSummary { }
