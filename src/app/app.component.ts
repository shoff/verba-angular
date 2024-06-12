import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RootLayoutComponent } from './root-layout/root-layout.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RootLayoutComponent,
    NavigationComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'verba-angular';
}
