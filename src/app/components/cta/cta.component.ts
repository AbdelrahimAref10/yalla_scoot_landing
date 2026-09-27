import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { PhotoComponent } from '../../shared/photo.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, TranslatePipe, PhotoComponent],
  templateUrl: './cta.component.html'
})
export class CtaComponent {}
