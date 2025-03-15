import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstAngularCode';
  isVisible : boolean = false;
  onToggle() {
    this.isVisible = !this.isVisible;
  }

  students = [
    {
      name : "sanjay",
      roll : "12b2",
      branch : "IT"
    },
    {
      name : "varun",
      roll : "12c5",
      branch : "IT"
    }
  ]
}
