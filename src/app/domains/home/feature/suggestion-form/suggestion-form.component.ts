import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Suggestion } from '../../data-access/suggestions/suggestion.model';
import { SuggestionService } from '../../data-access/suggestions/suggestion.service';

@Component({
  selector: 'suggestion-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.scss'
})
export class SuggestionFormComponent {
  @ViewChild('sugForm') form!: ElementRef<HTMLFormElement>;

  private suggestionService: SuggestionService = inject(SuggestionService);

  suggestion: Suggestion = {
    title: '',
    email: '',
    message: ''
  }

  showEmailError : boolean= false;
  showConfirmMsg: boolean = false;

  canSubmit(): boolean {
    return !(
      this.suggestion.title.trim() === '' ||
      this.suggestion.email.trim() === '' ||
      this.suggestion.message.trim() === ''
    );
  }

  async submit() {
    if (this.isEmailValid()) {
      this.showEmailError = false; // remove error message
      await this.suggestionService.submitSuggestion(this.suggestion); // submit suggestion

      // reset form
      this.form.nativeElement.reset();
      this.suggestion = { title: '', email: '', message: '' };

      // show confirmation message for 5 seconds
      this.showConfirmMsg = true;
      setTimeout(() => this.showConfirmMsg = false, 5000);
    } else {
      this.showEmailError = true; // show error message
    }
  }

  isEmailValid(): boolean {
    const emailRegex = /^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(this.suggestion.email);
  }
}
