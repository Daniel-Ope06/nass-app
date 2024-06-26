import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../data-access/students/student.model';
import { StudentService } from '../../data-access/students/student.service';
import { VerifyModalComponent } from '../../ui/verify-modal/verify-modal.component';

@Component({
  selector: 'registration-form',
  standalone: true,
  imports: [FormsModule, VerifyModalComponent],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss',
})
export class RegistrationFormComponent {
  @ViewChild('regForm') form!: ElementRef<HTMLFormElement>;

  private studentService: StudentService = inject(StudentService);

  student: Student = {
    fullName: '',
    matricNumber: '',
    // level: '',
    department: '',
    schoolEmail: '',
    verified: false,
  };

  matricErrorMessage: string = '';
  showMatricNumberError: boolean = false;
  showSchoolEmailError: boolean = false;
  showVerifyModal: boolean = false;

  // onLevelChange(event: any) {
  //   this.student.level = event.target.value;
  // }

  onDepartmentChange(event: any) {
    this.student.department = event.target.value;
  }

  canSubmit(): boolean {
    return !(
      this.student.fullName.trim() === '' ||
      this.student.matricNumber.trim() === '' ||
      // this.student.level === '' ||
      this.student.department === '' ||
      this.student.schoolEmail.trim() === ''
    );
  }

  async submit() {
    if (this.isSchoolEmailValid() && this.isMatricNumberValid()) {
      // remove error messages
      this.showMatricNumberError = false;
      this.showSchoolEmailError = false;

      // register student
      if (
        await this.studentService.isMatricNumberRegistered(
          this.student.matricNumber
        )
      ) {
        this.matricErrorMessage = 'Matric number already registered';
        this.showMatricNumberError = true;
        return;
      } else {
        // clean spaces from input
        this.student.fullName = this.student.fullName.trim();
        this.student.matricNumber = this.student.matricNumber.trim();
        this.student.schoolEmail = this.student.schoolEmail.trim();

        // capitalize first letter of each word
        this.student.fullName = this.student.fullName
          .split(' ')
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ');

        await this.studentService.registerStudent(this.student);
        this.showVerifyModal = true;
      }

      // reset form
      this.form.nativeElement.reset();
      this.student.fullName = '';
      this.student.matricNumber = '';
      // this.student.level = '';
      this.student.department = '';
      this.student.schoolEmail = '';
    } else {
      // show error messages
      this.matricErrorMessage = 'Invalid matric number. E.g: EU123456-2024';
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
    ) {
      return false;
    }
    return true;
  }
}
