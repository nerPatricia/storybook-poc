import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faLock, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() headerIcon = faVideoCamera;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() footerText: string = '';
  @Input() disabled = false;
  @Output()
  onClick = new EventEmitter();

  constructor(faIcon: FaIconLibrary) {
    faIcon.addIcons(faChevronCircleRight, faLock);
  }

  get setCardClass(): string[] {
    let classes = ['card'];
    if (this.disabled) {
      classes.push('card__disabled');
    }
    return classes;
  }
}
