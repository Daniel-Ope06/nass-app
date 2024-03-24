import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HeroImageService {
  private firestore: Firestore = inject(Firestore);

  async getAllImages(): Promise<string[]> {
    let imgUrls: string[] = [];
    const querySnapshot = await getDocs(collection(this.firestore, 'hero-images'));
    querySnapshot.forEach((doc) => {
      imgUrls.push(doc.data()['imageUrl'] as string);
    })
    return imgUrls;
  }
}
