import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-about-section',
  styleUrl: './about-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
   <section class="section section--white">
  <div class="container">
    <h2 class="section-title red">QUEM SOMOS</h2>

    <div class="about-main">
      <div class="about-text">
        <p>
          Lorem ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
        </p>

        <h4>Sobre a nossa história</h4>

        <p>
          Lorem ipsum tem sido o texto padrão da indústria tipográfica desde
          os anos 1500, quando um impressor desconhecido pegou uma bandeja
          de tipos e os embaralhou.
        </p>
      </div>

         <img src="images/about-us-image.png" alt="Quem somos" />

    </div>

    <div class="about-cards">
      <div class="about-card"></div>
      <div class="about-card"></div>
      <div class="about-card"></div>
      <div class="about-card"></div>
    </div>
  </div>
</section>

  `
})

export class AboutSection {
  readonly description = signal(
    'Somos uma iniciativa social dedicada a promover dignidade, inclusão e oportunidades.'
  );
}
