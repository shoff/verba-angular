import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
