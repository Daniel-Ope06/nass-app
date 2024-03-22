import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Slide } from '../../data-access/slide.model';

@Component({
  selector: 'slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input({required: true}) slides!: Slide[];

  @ViewChild('sliderRef', { static: true }) slider!: ElementRef;

  isLeftScrollDisabled: boolean = true;
  isRightScrollDisabled: boolean = false;

  openForm(url: string): void {
    window.open(url, '_blank');
  }

  scrollLeft(): void {
    this.slider.nativeElement.scrollLeft -= window.innerWidth/2;
  }

  scrollRight(): void {
    this.slider.nativeElement.scrollLeft += window.innerWidth/2;
  }

  disableLeftScroll(): boolean {
    return this.slider.nativeElement.scrollLeft === 0;
  }

  disableRightScroll(): boolean {
    let maxScrollLeft = this.slider.nativeElement.scrollWidth - this.slider.nativeElement.clientWidth;
    let scrollRemaining = maxScrollLeft - this.slider.nativeElement.scrollLeft;
    return scrollRemaining <= window.innerWidth/6;
  }

  onScroll(): void {
    this.isLeftScrollDisabled = this.disableLeftScroll();
    this.isRightScrollDisabled = this.disableRightScroll();
  }
}
