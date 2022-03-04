import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
  title: string;
  desc: string;
  btnText: string;
  btnLink: string;
}

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss'],
})
export class HeroCarouselComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 5000;

  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  // Changes every 3 seconds
  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  // Set dot indicator on click
  selectedImage(index: number) {
    this.selectedIndex = index;
  }

  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex - this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
