import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { InputCheckerComponent } from './components/input-checker/input-checker.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PreloaderComponent,
    InputCheckerComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    PreloaderComponent,
    InputCheckerComponent,
  ],
})
export class SharedModule {}
