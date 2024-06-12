import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'root-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './root-layout.component.html',
  styleUrl: './root-layout.component.scss'
})
export class RootLayoutComponent {
  title: any;
  description: any;

}
