import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Home';

  slides = [
    {
      imageSrc: '../../../../assets/images/slides/slide1n.png',
      imageAlt: 'The Oak Holdings',
      title: 'The Oak',
      desc: 'The Oak Holdings is a consortium of companies specialising in Private equity, Venture Capital, alternative asset management , Real Estate and financial services.',
      btnText: 'Get More Info',
      btnLink: 'contactUs',
    },
    {
      imageSrc: '../../../../assets/images/slides/slide1.png',
      imageAlt: 'The Oak Homes',
      title: 'The Oak Homes',
      desc: 'Oak Homes is a leading Real Estate Development company with its primary business in Lagos, Nigeria and recently made a foray into the United Kingdom and the United States.',
      btnText: 'Get More Info',
      btnLink: 'contactUs',
    },
    {
      imageSrc: '../../../../assets/images/slides/slide2.png',
      imageAlt: 'The Oak Capital',
      title: 'The Oak Capital',
      desc: 'Our strategy is to be positioned as the go-to investor for founders with groundbreaking solutions to problems in Africa.',
      btnText: 'Get More Info',
      btnLink: 'contactUs',
    },
    {
      imageSrc: '../../../../assets/images/slides/slide2n.png',
      imageAlt: 'The Oak Bank',
      title: 'The Oak Bank',
      desc: 'We are a digital bank, designed to be an economic driver and a vehicle of economic empowerment where we provide the wings for entrepreneurs to fly.',
      btnText: 'Get More Info',
      btnLink: 'contactUs',
    },
  ];

  services = [
    {
      imageSrc: '../../../../assets/images/slides/slide1.png',
      imageAlt: 'The Oak Homes',
      title: 'The Oak Homes',
      desc: '<p>Oak Homes is a leading Real Estate Development company with its primary business in Lagos, Nigeria and recently made a foray into the United Kingdom and the United States. Our value chain business with an intention to backward integrate includes Facility management, Construction and Infrastructure Development companies within the Group Business. We pride ourselves as being innovative and creative team and with combined experience spanning over Four (4) decades.</p><p>We pride ourselves as lovers of art and creating masterpieces of Real Estate Portfolio.</p>',
      btnText: 'Get More Info',
      btnLink: 'contactUs',
    },
    {
      imageSrc: '../../../../assets/images/slides/slide2.png',
      imageAlt: 'The Oak Capital',
      title: 'The Oak Capital',
      desc: '<p>The Oak Capital is a venture capital management firm established for making outstanding investment deals in Sub-Saharan Africa, with a bias for businesses driving technological innovations, financial inclusion, healthcare services, and agriculture.</p><p>Our strategy is to be positioned as the go-to investor for founders with groundbreaking solutions to problems in Africa.</p>',
      btnText: 'Get More Info',
      btnLink: 'contactUs',
    },
    {
      imageSrc: '../../../../assets/images/slides/slide2n.png',
      imageAlt: 'The Oak Bank',
      title: 'The Oak Bank',
      desc: '<p>The Oak bank is a digital bank, designed to be an economic driver and a vehicle of economic empowerment where we provide the wings for entrepreneurs to fly. Our everyday lives are littered with barriers - big and small. Choosing where we bank is no exception; recognizing and treating customers as unique individuals is our priority.</p><p>As more people bank digitally, Oak Bank creates and provides outstanding digital banking experiences to help our customers forge human connections filled with success stories.</p>',
      btnText: 'Get More Info',
      btnLink: 'contactUs',
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

  isSubmitting = false;

  noFirstName = false;
  noFirstNameMessage = '';

  noLastName = false;
  noLastNameMessage = '';

  noEmail = false;
  noEmailMessage = '';

  noMessage = false;
  noMessageMessage = '';

  canSubmit = false;

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private toast: ToastrService
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {}

  checkEmail() {
    let email = this.form.value.email;
    if (email == '') {
      this.noEmail = true;
      this.noEmailMessage = 'Valid email address is required';
    } else {
      this.noEmail = false;
    }
  }

  checkFirstName() {
    let firstName = this.form.value.firstName;
    if (firstName == '') {
      this.noFirstName = true;
      this.noFirstNameMessage = 'Valid first name is required';
    } else {
      this.noFirstName = false;
    }
  }

  checkLastName() {
    let lastName = this.form.value.lastName;
    if (lastName == '') {
      this.noLastName = true;
      this.noLastNameMessage = 'Valid last name is required';
    } else {
      this.noLastName = false;
    }
  }

  checkMessage() {
    let Message = this.form.value.Message;
    if (Message == '') {
      this.noMessage = true;
      this.noMessageMessage = 'Valid last name is required';
    } else {
      this.noMessage = false;
    }
  }

  form = this.formBuilder.group({
    firstName: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    lastName: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    email: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    phoneNumber: [''],
    source: [''],
    message: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
  });

  async onSubmit() {
    if (this.form.invalid) {
      this.toast.error(
        'Please provide valid data. Remember all fields except phone and how you had about us are required',
        'Request Denied'
      );
      return;
    } else {
      this.isSubmitting = true;
      this.form.disable;

      let firstName = this.form.value.firstName;
      let lastName = this.form.value.lastName;
      let email = this.form.value.email;
      let phoneNumber = this.form.value.phoneNumber;
      let source = this.form.value.source;
      let message = this.form.value.message;

      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        source: source,
        message: message,
      };

      this.toast.success(
        'Your message is well received, we will be in touch. Thank You',
        'Message Sent!'
      );
      this.isSubmitting = false;
      this.form.enable;
      this.form.reset();
    }
  }
}
