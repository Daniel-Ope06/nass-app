import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Slide } from '../../../shared/data-access/slide.model';

@Injectable({
  providedIn: 'root'
})
export class NassFormService {
  private firestore: Firestore = inject(Firestore);

  async getAllForms(): Promise<Slide[]> {
    let forms: Slide[] = [];
    const querySnapshot = await getDocs(collection(this.firestore, 'forms'));
    querySnapshot.forEach((doc) => {
      forms.push(doc.data() as Slide);
    })
    return forms;
  }
}
