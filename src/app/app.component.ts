import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'The Oak Holdings';
  uid: string = '';

  constructor() {}

  ngOnInit(): void {
    // Check if local storage contains preferred theme mode
    let darkMode = false;
    let darkTheme = localStorage.getItem('darkTheme');

    if (darkTheme === 'true') {
      darkMode = true;
      document.body.classList.toggle('dark-version', darkMode);
    } else if (darkTheme != 'true') {
      darkMode = false;
      document.body.classList.toggle('dark-version', darkMode);
    } else {
      // Use systems default theme mode
      const isDark = window.matchMedia('(prefers-color-scheme: dark)');
      document.body.classList.toggle('dark-version', isDark.matches);
    }

    $(window).on('load', function () {
      $('.overlay').delay(500).fadeOut('slow');
      $('body').removeClass('hide');
    });

    $(window).on('scroll', function (e) {
      var $el = $('.navbar');
      var isPositionFixed = $el.css('position') == 'fixed';
      if ($(this).scrollTop()! > 60 && !isPositionFixed) {
        $el.addClass('sticky');
        $el.css({
          background: '#000000',
          position: 'fixed',
          top: '0px',
          width: '100%',
        });
        $('.nav-link').css({
          color: '#ffffff',
        });
        $('.cart-holder').css({
          color: '#ffffff',
        });
      }
      if ($(this).scrollTop()! < 60 && isPositionFixed) {
        $el.removeClass('sticky');
        $el.css({
          background: 'transparent',
          position: 'static',
          top: '0px',
        });
        $('.nav-link').css({
          color: '#ffffff',
        });
        $('.cart-holder').css({
          color: '#ffffff',
        });
      }
    });
  }
}
