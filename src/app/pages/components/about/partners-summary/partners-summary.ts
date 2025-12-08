import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-partners-summary',
  imports: [],
  template: `<p>partners-summary works!</p>`,
  styleUrl: './partners-summary.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersSummary { }
