import { Injectable, inject } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private firestore: Firestore = inject(Firestore);

  async registerStudent(student: Student) {
    await setDoc(doc(this.firestore, 'students', student.matricNumber), student);
  }

  async isMatricNumberRegistered(matricNumber: string): Promise<boolean> {
    const docRef = doc(this.firestore, 'students', matricNumber);
    const docSnapshot = await getDoc(docRef);
    return docSnapshot.exists();
  }
}
