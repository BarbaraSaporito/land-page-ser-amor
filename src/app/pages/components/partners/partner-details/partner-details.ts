import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-partner-details',
  imports: [],
  template: `<p>partner-details works!</p>`,
  styleUrl: './partner-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerDetails { }
