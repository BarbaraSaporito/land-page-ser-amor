import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-support',
  imports: [],
  template: `<p>support works!</p>`,
  styleUrl: './support.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Support { }
