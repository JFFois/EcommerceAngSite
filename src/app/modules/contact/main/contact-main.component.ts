import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-contacts-component',
    templateUrl: './contact-main.component.html'
})

export class ContactComponent {
    public pretrad: string;
    genre: any =  "M";
    genreOptions: any[];

    constructor (
        private router: Router
    ) {
        this.pretrad = 'MODULES.CONTACT.';

        this.genreOptions = [
            {name: 'M', value: "M"},
            {name: 'MME', value: "MME"},
            {name: 'MLLE', value: "MLLE"}
        ];
    }

    public sendForm(): void {
    }

    public goToVisiochat(): void {

    }
}