import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroCarouselModule } from './carousel/hero-carousel/hero-carousel.module';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from './shared/shared.module';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HeroCarouselModule,
    LayoutsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      preventDuplicates: true,
      progressBar: true,
    }),
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
