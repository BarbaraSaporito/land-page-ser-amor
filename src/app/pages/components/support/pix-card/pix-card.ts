import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pix-card',
  imports: [],
  template: `<p>pix-card works!</p>`,
  styleUrl: './pix-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PixCard { }
