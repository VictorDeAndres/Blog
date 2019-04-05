import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { Contactform } from './../classes/contactform';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(
    private httpClient: HttpClient
  ) { }

  sendForm(contacForm: Contactform): Promise<boolean> {
    return new Promise( resolve => {

      const url = `${environment.hostDatabase}/blogcontact`;

      this.httpClient
        .post(url, contacForm)
          .subscribe(data => {
            resolve();
          }, error => {
            console.error(`${error.status} - ${error.statusText}`);
            resolve();
          });
    });
  }
}
