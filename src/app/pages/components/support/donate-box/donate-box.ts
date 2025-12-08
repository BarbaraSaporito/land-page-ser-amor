import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-donate-box',
  imports: [],
  template: `<p>donate-box works!</p>`,
  styleUrl: './donate-box.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonateBox { }
