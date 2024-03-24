import { Component } from '@angular/core';
import { CarouselComponent } from '../../../shared/feature/carousel/carousel.component';

@Component({
  selector: 'hero-carousel',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.scss'
})
export class HeroCarouselComponent {
  slideUrls: string[] = [
    'https://firebasestorage.googleapis.com/v0/b/nass-eu.appspot.com/o/images%2Fcoding-laptop.jpg?alt=media&token=7e2b1a7e-2fbc-4989-8401-fe6173217443',
    'https://firebasestorage.googleapis.com/v0/b/nass-eu.appspot.com/o/images%2Fmetal-chairs.jpg?alt=media&token=5f6ddfe7-466d-44ec-a204-c685c8e9261c',
    'https://firebasestorage.googleapis.com/v0/b/nass-eu.appspot.com/o/images%2Fmovie-camera.jpg?alt=media&token=93505535-0aca-422b-b2f6-714e8622e49f',
  ];
}
