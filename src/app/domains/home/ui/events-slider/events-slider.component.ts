import { Component, inject } from '@angular/core';
import { Slide } from '../../../shared/data-access/slide.model';
import { SliderComponent } from '../../../shared/feature/slider/slider.component';
import { NassEventService } from '../../data-access/events/nass-event.service';

@Component({
  selector: 'events-slider',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './events-slider.component.html',
  styleUrl: './events-slider.component.scss'
})
export class EventsSliderComponent {
  private nassEventService: NassEventService = inject(NassEventService);

  events: Slide[] = [];

  ngOnInit(): void {
    this.nassEventService.getAllEvents().then((events) => {
      this.events = events;
    });
  }
}
