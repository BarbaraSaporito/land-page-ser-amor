import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeroSection } from "../sections/hero-section/hero-section";
import { AboutSection } from '../sections/about-section/about-section';
import { ActivitiesSection } from '../sections/activities-section/activities-section';
import { SupportSection } from '../sections/support-section/support-section';
import { ProjectsSection } from '../sections/projects-section/projects-section';
import { PartnersSection } from '../sections/partners-section/partners-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSection,
    AboutSection,
    ActivitiesSection,
    ProjectsSection,
    PartnersSection,
    SupportSection,

  ],
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero-section />
    <app-about-section />
    <app-activities-section />
    <app-projects-section />
    <app-partners-section />
    <app-support-section />
  `,

})
export class Home {
  readonly pageTitle = signal('Home');

}
