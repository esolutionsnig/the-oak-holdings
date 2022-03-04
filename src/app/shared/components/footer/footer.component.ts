import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
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

  sisterFirms = [
    {
      title: 'The Oak Capital',
      url: 'https://theoakcapital.com',
    },
    {
      title: 'The Oak Bank',
      url: 'https://theoakbankng.com',
    },
    {
      title: 'The Oak Homes',
      url: 'https://theoakhomeslimited.com',
    },
    {
      title: 'The Oak Heights',
      url: 'https://theoakheights.com',
    },
  ];

  contacts = [
    {
      url: '/',
      title: '4, Ribadu Street, Ikoyi, Lagos, Nigeria.',
      icon: 'ri-home-fill',
    },
    {
      url: 'support@theoakholdings.com',
      title: 'support@theoakholdings.com',
      icon: 'ri-send-plane-fill',
    },
    {
      url: '+2349090000015 ',
      title: '+234 909 000 0015 ',
      icon: 'ri-phone-fill',
    },
  ];

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

  year = new Date().getFullYear();

  activeIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  goToPage(id: string, index: number) {
    this.activeIndex = index;
    document.getElementById(id)?.scrollIntoView();
  }
}
