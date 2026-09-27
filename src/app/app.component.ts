import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { WhyComponent } from './components/why/why.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { CtaComponent } from './components/cta/cta.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    FeaturesComponent,
    WhyComponent,
    FleetComponent,
    CtaComponent,
    TestimonialsComponent,
    FaqComponent,
    BlogComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
