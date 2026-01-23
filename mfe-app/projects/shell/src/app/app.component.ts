import { Component } from '@angular/core';
import {Router, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shell';

  public constructor(
    private readonly router: Router
  ) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
