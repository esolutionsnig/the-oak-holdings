import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logo = '../../../../assets/images/logo.png';

  menu = [
    {
      title: 'Home',
      url: 'home',
    },
    {
      title: 'Who We Are',
      url: 'whoWeAre',
    },
    {
      title: 'What We Do',
      url: 'whatWeDo',
    },
    {
      title: 'Contact Us',
      url: 'contactUs',
    },
  ];

  activeIndex: number = 0;

  socialMedia = [
    {
      icon: 'ri-linkedin-line',
      url: 'https://www.linkedin.com/company/oak-homes-limited/',
    },
    {
      icon: 'ri-facebook-line',
      url: 'https://www.facebook.com/oakhomeslimited/',
    },
    {
      icon: 'ri-twitter-line',
      url: 'https://mobile.twitter.com/oakhomeslimited',
    },
    {
      icon: 'ri-instagram-line',
      url: 'https://www.instagram.com/theoakholdings/?utm_medium=copy_link',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    $(function () {
      var $hamburger = $('.hamburger');
      var $navModal = $('#menuModal');
      var $navLink = $('.nav-links');

      $hamburger.on('click', () => {
        $hamburger.toggleClass('active');
        $navModal.css({ display: 'block' });
      });

      $navLink.on('click', () => {
        $hamburger.removeClass('active');
        $navModal.css({ display: 'none' });
      });
    });
  }

  goToPage(id: string, index: number) {
    this.activeIndex = index;
    document.getElementById(id)?.scrollIntoView();
  }
}
