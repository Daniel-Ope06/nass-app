import { Component } from '@angular/core';

// Import home domain components
import { EventsSliderComponent } from './ui/events-slider/events-slider.component';
import { FooterComponent } from '../shared/ui/footer/footer.component';
import { GoalSectionComponent } from './ui/goal-section/goal-section.component';
import { HeroCarouselComponent } from './ui/hero-carousel/hero-carousel.component';
import { NavbarComponent } from '../shared/ui/navbar/navbar.component';
import { NewsSliderComponent } from './ui/news-slider/news-slider.component';
import { RegistrationFormComponent } from './feature/registration-form/registration-form.component';
import { SuggestionFormComponent } from './feature/suggestion-form/suggestion-form.component';
import { VoteBannerComponent } from './ui/vote-banner/vote-banner.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    EventsSliderComponent,
    FooterComponent,
    GoalSectionComponent,
    HeroCarouselComponent,
    NavbarComponent,
    NewsSliderComponent,
    RegistrationFormComponent,
    SuggestionFormComponent,
    VoteBannerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngOnInit() {
    this.resetScrollPosition();
  }

  // scroll to top and remove hash from url
  resetScrollPosition() {
    window.scrollTo(0, 0);
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}
