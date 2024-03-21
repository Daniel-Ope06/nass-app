import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'verify-modal',
  standalone: true,
  imports: [],
  templateUrl: './verify-modal.component.html',
  styleUrl: './verify-modal.component.scss'
})
export class VerifyModalComponent {
  @Output() hideEvent = new EventEmitter<void>();
}
