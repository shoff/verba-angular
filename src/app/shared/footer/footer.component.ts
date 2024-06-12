import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
