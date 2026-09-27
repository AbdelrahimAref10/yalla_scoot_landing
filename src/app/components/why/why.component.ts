import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RevealDirective } from '../../shared/reveal.directive';
import { PhotoComponent } from '../../shared/photo.component';

@Component({
  selector: 'app-why',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RevealDirective, PhotoComponent],
  templateUrl: './why.component.html'
})
export class WhyComponent {
  items = [
    { title: 'WHY.I1T', body: 'WHY.I1D' },
    { title: 'WHY.I2T', body: 'WHY.I2D' },
    { title: 'WHY.I3T', body: 'WHY.I3D' },
    { title: 'WHY.I4T', body: 'WHY.I4D' }
  ];
}
