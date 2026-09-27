import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { PhotoComponent } from '../../shared/photo.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe, PhotoComponent],
  templateUrl: './hero.component.html'
})
export class HeroComponent {}
