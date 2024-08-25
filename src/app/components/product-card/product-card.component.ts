import { Component, input, output } from '@angular/core';
import { IonCard, IonText, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [IonLabel, IonText, IonCard]
})
export class ProductCardComponent {
  imagePath = input.required<string>();
  title = input.required<string>();

  selected = output<void>();
}
