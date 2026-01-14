import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '../../../shared/button/button';

@Component({
  selector: 'app-hero-section',
  imports: [Button],
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

  template: `

  <section class="section section--white">
    <div class="container hero">
      <div class="hero-text">
        <h1>
          Faça a diferença nas vidas de quem precisa muito de nossa ajuda!
        </h1>

        <p>
          We develop innovative design solutions that enable our clients
          to enhance their competitive advantage.
        </p>

        <div class="hero-actions">
          <app-button label="Doe Agora" variant="warn" />
          <app-button label="Saiba mais" variant="outline" />
        </div>
      </div>

      <div class="hero-image-wrapper">
    <img src="images/hero-image.png" alt="Quem somos" />


      </div>
    </div>
  </section>

`,

})
export class HeroSection { }
