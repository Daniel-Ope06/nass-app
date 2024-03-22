import { Component } from '@angular/core';

// Import home domain components
import { FormsSliderComponent } from './ui/forms-slider/forms-slider.component';
import { GoalSectionComponent } from './ui/goal-section/goal-section.component';
import { RegistrationFormComponent } from './feature/registration-form/registration-form.component';
import { SuggestionFormComponent } from './feature/suggestion-form/suggestion-form.component';
import { VoteBannerComponent } from './ui/vote-banner/vote-banner.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    FormsSliderComponent,
    GoalSectionComponent,
    RegistrationFormComponent,
    SuggestionFormComponent,
    VoteBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
