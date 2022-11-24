import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import { fadeInDown } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Toolbar_Project';

  name = 'Angular Example For Teximate';

  enterAnimation: TextAnimation = {
    animation: fadeInDown,
    delay: 50,
    type: 'letter',
  };
}
