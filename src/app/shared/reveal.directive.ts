import { AfterViewInit, Directive, ElementRef, HostBinding, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @HostBinding('class.reveal') revealClass = true;
  @HostBinding('class.is-in') shown = false;
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      this.shown = true;
      return;
    }
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.shown = true;
        this.observer?.disconnect();
      }
    }, { threshold: 0.16 });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
