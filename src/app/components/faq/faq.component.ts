import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RevealDirective } from '../../shared/reveal.directive';
import { PhotoComponent } from '../../shared/photo.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RevealDirective, PhotoComponent],
  templateUrl: './faq.component.html'
})
export class FaqComponent {
  open = 0;
  items = [1, 3, 4, 5, 6];

  toggle(index: number) {
    this.open = this.open === index ? -1 : index;
  }
}
