import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentSlide = 0;
  totalSlides = 4; // Número de carros

  moveLeft() {
    this.currentSlide = (this.currentSlide === 0) ? this.totalSlides - 1 : this.currentSlide - 1;
  }

  moveRight() {
    this.currentSlide = (this.currentSlide === this.totalSlides - 1) ? 0 : this.currentSlide + 1;
  }
}
