import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  imports: [],
  template: `<p>activities works!</p>`,
  styleUrl: './activities.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Activities { }
