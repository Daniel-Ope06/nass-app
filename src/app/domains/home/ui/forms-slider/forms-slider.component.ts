import { Component, inject } from '@angular/core';
import { Slide } from '../../../shared/data-access/slide.model';
import { SliderComponent } from '../../../shared/feature/slider/slider.component';
import { NassFormService } from '../../data-access/forms/nass-form.service';

@Component({
  selector: 'forms-slider',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './forms-slider.component.html',
  styleUrl: './forms-slider.component.scss'
})
export class FormsSliderComponent {
  private nassFormService: NassFormService = inject(NassFormService);

  forms: Slide[] = [];

  ngOnInit(): void {
    this.nassFormService.getAllForms().then((forms) => {
      this.forms = forms;
    });
  }
}
