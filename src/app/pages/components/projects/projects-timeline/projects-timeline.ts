import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects-timeline',
  imports: [],
  template: `<p>projects-timeline works!</p>`,
  styleUrl: './projects-timeline.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsTimeline { }
