import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() colorTheme: 'primary' | 'secondary' | 'error' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' | 'expand' = 'small';
  @Input() disabled = false;
  @Output()
  onClick = new EventEmitter();

  get setButtonClass(): string[] {
    let classes = ['button'];
    if (this.disabled) {
      classes.push('button__disabled');
    }
    return [...classes, `button__${this.colorTheme}`, `button__${this.size}`];
  }
}
