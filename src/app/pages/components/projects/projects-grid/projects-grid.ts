import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects-grid',
  imports: [],
  template: `<p>projects-grid works!</p>`,
  styleUrl: './projects-grid.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsGrid { }
