import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Slide } from '../../../shared/data-access/slide.model';

@Injectable({
  providedIn: 'root',
})
export class NassNewsService {
  private firestore: Firestore = inject(Firestore);

  async getAllNews(): Promise<Slide[]> {
    let news: Slide[] = [];
    const querySnapshot = await getDocs(collection(this.firestore, 'news'));
    querySnapshot.forEach((doc) => {
      news.push(doc.data() as Slide);
    });
    return news.reverse();
  }
}
