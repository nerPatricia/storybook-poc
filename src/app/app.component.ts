import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './shared/components/card/card.component';
import { ButtonComponent } from './shared/components/button/button.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { PhoneMaskDirective } from './shared/directives/phone-mask/phone-mask.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    PhoneMaskDirective,
    RouterOutlet,
    CardComponent,
    ButtonComponent,
    FontAwesomeModule,
  ],
})
export class AppComponent {
  title = 'storybook-poc';

  constructor(faIcon: FaIconLibrary) {
    faIcon.addIcons(faLock);
  }

  showConsoleLog() {
    console.log('clicou no footer do card');
  }
}
