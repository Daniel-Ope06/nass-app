import { Injectable, inject } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Suggestion } from './suggestion.model';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private firestore: Firestore = inject(Firestore);

  async submitSuggestion(suggestion: Suggestion) {
    await setDoc(doc(this.firestore, 'suggestions', this.generateID()), suggestion);
  }

  private generateID(): string {
    return Math.random().toString(36).substring(2);
  }
}
