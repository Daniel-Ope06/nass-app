import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../data-access/student.model';

@Component({
  selector: 'registration-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent {
  @ViewChild('regForm') form!: ElementRef<HTMLFormElement>;

  student: Student = {
    fullName: '',
    matricNumber: '',
    level: '',
    department: '',
    schoolEmail: '',
    verified: false
  }

  showMatricNumberError = false;
  showSchoolEmailError = false;

  onLevelChange(event: any) {
    this.student.level = event.target.value;
  }

  onDepartmentChange(event: any) {
    this.student.department = event.target.value;
  }

  canSubmit(): boolean {
    return !(
      this.student.fullName.trim() === '' ||
      this.student.matricNumber.trim() === '' ||
      this.student.level === '' ||
      this.student.department === '' ||
      this.student.schoolEmail.trim() === ''
    );
  }

  submit() {
    if (this.isSchoolEmailValid() && this.isMatricNumberValid()) {
      // remove error messages
      this.showMatricNumberError = false;
      this.showSchoolEmailError = false;

      // register student
      console.log('registered');

      // reset form
      this.form.nativeElement.reset();
      this.student.fullName = '';
      this.student.matricNumber = '';
      this.student.level = '';
      this.student.department = '';
      this.student.schoolEmail = '';
    } else {
      // show error messages
      this.showMatricNumberError = !this.isMatricNumberValid();
      this.showSchoolEmailError = !this.isSchoolEmailValid();
    }
  }

  isSchoolEmailValid(): boolean {
    return this.student.schoolEmail.endsWith('@elizadeuniversity.edu.ng');
  }

  isMatricNumberValid(): boolean {
    if (
      this.student.matricNumber.length !== 13 ||
      !this.student.matricNumber.startsWith('EU') ||
      this.student.matricNumber.charAt(8) !== '-' ||
      isNaN(Number(this.student.matricNumber.substring(2, 8))) ||
      isNaN(Number(this.student.matricNumber.substring(9)))
    ) { return false; }
    return true;
  }
}
