import { Component } from '@angular/core';
import { GoalSectionComponent } from './ui/goal-section/goal-section.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [GoalSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
