import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Contactform } from './../../classes/contactform';
import { ContactService } from './../../services/contact.service';

@Component({
  selector: 'blog-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {

  contact = new Contactform('', '', '');

  constructor(
    private router: Router,
    private contactService: ContactService
  ) { }

  onSubmit(): void {
    this.contactService.sendForm(this.contact)
      .then( () => {
        this.router.navigateByUrl('/posts');
      });
  }

}
