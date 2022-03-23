import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, FormsModule, Validators  } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { Mail } from '../../../model/forms/mail.model';

@Component({
    selector: 'bp-house-contact-component',
    templateUrl: './contact.component.html',
    providers: [MessageService]
})

export class HouseContactComponent implements OnInit {
    public pretrad: string;
    contactForm: FormGroup;
    mail: Mail;
    genre: any =  "M";
    genreOptions: any[];

    constructor (
        private router: Router,
        private fb: FormBuilder,
        private messageService: MessageService
    ) {
        this.pretrad = 'MODULES.HOUSE.CONTACT.';

        this.genreOptions = [
            {name: 'M', value: "M"},
            {name: 'MME', value: "MME"},
            {name: 'MLLE', value: "MLLE"}
        ];

        this.mail = new Mail();
    }

    ngOnInit() {
        this.contactForm = this.fb.group({
            genre: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            text: ['']
          });
    }
    
    initContactForm() {
    
    }

    sendForm() {
        const formValue = this.contactForm.value;
        this.mail.genre = formValue['genre'].value;
        this.mail.firstName = formValue['firstName'];
        this.mail.lastName = formValue['lastName'];
        this.mail.email = formValue['email'];
        this.mail.phone = formValue['phone'];
        this.mail.text = formValue['text'];

        console.log(this.mail);

        //call Service
    }

    public goToVisiochat(): void {

    }
}