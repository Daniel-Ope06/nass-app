import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input({required: true}) slideUrls!: string[];

  @ViewChild('carouselRef', { static: true }) carousel!: ElementRef;

  isLeftScrollDisabled: boolean = true;
  isRightScrollDisabled: boolean = false;

  scrollLeft(): void {
    this.carousel.nativeElement.scrollLeft -= window.innerWidth/2;
  }

  scrollRight(): void {
    this.carousel.nativeElement.scrollLeft += window.innerWidth/2;
  }

  disableLeftScroll(): boolean {
    return this.carousel.nativeElement.scrollLeft <= 10;
  }

  disableRightScroll(): boolean {
    let maxScrollLeft = this.carousel.nativeElement.scrollWidth - this.carousel.nativeElement.clientWidth;
    let scrollRemaining = maxScrollLeft - this.carousel.nativeElement.scrollLeft;
    return scrollRemaining <= window.innerWidth/6;
  }

  onScroll(): void {
    this.isLeftScrollDisabled = this.disableLeftScroll();
    this.isRightScrollDisabled = this.disableRightScroll();
  }
}
