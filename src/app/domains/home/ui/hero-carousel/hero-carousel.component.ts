import { Component, inject } from '@angular/core';
import { CarouselComponent } from '../../../shared/feature/carousel/carousel.component';
import { HeroImageService } from '../../data-access/hero-images/hero-image.service';

@Component({
  selector: 'hero-carousel',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.scss'
})
export class HeroCarouselComponent {
  private heroImageService: HeroImageService = inject(HeroImageService);

  slideUrls: string[] = [];

  ngOnInit(): void {
    this.heroImageService.getAllImages().then((images) => {
      this.slideUrls = images;
    });
  }
}
