import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-landing-page-personal-informations-component',
    templateUrl: './personal-informations.component.html'
})

export class LandingPagePersonalInformationsComponent {
    public pretrad: string;

    constructor() {
        this.pretrad = 'MODULES.LANDING-PAGE.PERSONAL-INFORMATIONS.';
    }
}