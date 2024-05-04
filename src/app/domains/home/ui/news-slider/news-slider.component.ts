import { Component, inject } from '@angular/core';
import { Slide } from '../../../shared/data-access/slide.model';
import { SliderComponent } from '../../../shared/feature/slider/slider.component';
import { NassNewsService } from '../../data-access/news/nass-news.service';

@Component({
  selector: 'news-slider',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './news-slider.component.html',
})
export class NewsSliderComponent {
  private nassNewsService: NassNewsService = inject(NassNewsService);

  forms: Slide[] = [];

  ngOnInit(): void {
    this.nassNewsService.getAllNews().then((forms) => {
      this.forms = forms;
    });
  }
}
