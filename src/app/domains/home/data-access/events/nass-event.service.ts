import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Slide } from '../../../shared/data-access/slide.model';

@Injectable({
  providedIn: 'root',
})
export class NassEventService {
  private firestore: Firestore = inject(Firestore);

  async getAllEvents(): Promise<Slide[]> {
    let events: Slide[] = [];
    const querySnapshot = await getDocs(collection(this.firestore, 'events'));
    querySnapshot.forEach((doc) => {
      events.push(doc.data() as Slide);
    });
    return events.reverse();
  }
}
