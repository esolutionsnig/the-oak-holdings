import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HeroCarouselModule } from '../carousel/hero-carousel/hero-carousel.module';
import { HomeComponent } from './components/home/home.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [LayoutsComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HeroCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    // ToastrModule.forRoot({
    //   timeOut: 10000,
    //   preventDuplicates: true,
    //   progressBar: true,
    // }),
  ],
})
export class LayoutsModule {}
