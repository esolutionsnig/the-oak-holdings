import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCarouselComponent } from './hero-carousel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroCarouselComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeroCarouselComponent],
})
export class HeroCarouselModule {}
