import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  imports: [],
  template: `<p>qr-code works!</p>`,
  styleUrl: './qr-code.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QrCode { }
