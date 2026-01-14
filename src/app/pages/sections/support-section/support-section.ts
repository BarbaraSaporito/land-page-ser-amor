import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-support-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './support-section.css',
  template: `
    <section class="section section--white">
      <div class="container">
        <img src="images/pix-image.png"
          alt="Informações para doação via PIX"
        />

        <p class="pix-address">
          Venha nos conhecer! Estamos localizados na R. Luiz Belli, 781 –
          Conj. Hab. – St. B, Itapevi – SP, 06665-080
        </p>
      </div>
    </section>
  `
})
export class SupportSection {}
