import { AfterViewInit, Component } from '@angular/core';

// Import home domain components
import { EventsSliderComponent } from './ui/events-slider/events-slider.component';
import { FooterComponent } from '../shared/ui/footer/footer.component';
import { FormsSliderComponent } from './ui/forms-slider/forms-slider.component';
import { GoalSectionComponent } from './ui/goal-section/goal-section.component';
import { HeroCarouselComponent } from './ui/hero-carousel/hero-carousel.component';
import { NavbarComponent } from '../shared/ui/navbar/navbar.component';
import { RegistrationFormComponent } from './feature/registration-form/registration-form.component';
import { SuggestionFormComponent } from './feature/suggestion-form/suggestion-form.component';
import { VoteBannerComponent } from './ui/vote-banner/vote-banner.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    EventsSliderComponent,
    FooterComponent,
    FormsSliderComponent,
    GoalSectionComponent,
    HeroCarouselComponent,
    NavbarComponent,
    RegistrationFormComponent,
    SuggestionFormComponent,
    VoteBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.restoreScrollPosition();
  }

  restoreScrollPosition() {
    const url = window.location.href;

    // check if there is a # in the url
    if (url.includes('#')) {
      const hash = url.substring(url.indexOf('#') + 1);
      const element = document.getElementById(hash);

      // if the element exists
      if (element) {
        // scroll to the element
        element.scrollIntoView();
      }
    }
  }
}
