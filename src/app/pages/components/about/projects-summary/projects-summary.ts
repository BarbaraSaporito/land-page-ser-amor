import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects-summary',
  imports: [],
  template: `<p>projects-summary works!</p>`,
  styleUrl: './projects-summary.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSummary { }
