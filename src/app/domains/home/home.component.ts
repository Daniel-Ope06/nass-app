import { Component } from '@angular/core';

// Import home domain components
import { EventsSliderComponent } from './ui/events-slider/events-slider.component';
import { FormsSliderComponent } from './ui/forms-slider/forms-slider.component';
import { GoalSectionComponent } from './ui/goal-section/goal-section.component';
import { HeroCarouselComponent } from './ui/hero-carousel/hero-carousel.component';
import { RegistrationFormComponent } from './feature/registration-form/registration-form.component';
import { SuggestionFormComponent } from './feature/suggestion-form/suggestion-form.component';
import { VoteBannerComponent } from './ui/vote-banner/vote-banner.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    EventsSliderComponent,
    FormsSliderComponent,
    GoalSectionComponent,
    HeroCarouselComponent,
    RegistrationFormComponent,
    SuggestionFormComponent,
    VoteBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
