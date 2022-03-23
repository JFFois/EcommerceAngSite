import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'bp-app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    constructor(
        private translate: TranslateService,
        private httpClient: HttpClient,
        private meta: Meta
    ) {
        this.meta.updateTag({name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0'}, 'name="viewport"');
    }

    public ngOnInit() {
        const files = [
            'components.json'
        ];
        this.setTranslation('fr-FR', files);
    }

    private setTranslation(lang: string, files: string[]): void {
        let index = 0;
        let object = {};
        files.forEach((element) => {
            index++;
            this.httpClient.get(
                `assets/translations/${lang}/${element}`,
                {responseType: 'text'}
            ).toPromise().then(
                (trads) => {
                    object = Object.assign({}, object, JSON.parse(trads));
                    if (index === files.length) {
                        this.translate.setTranslation(lang, object);
                        this.translate.use('fr-FR');
                    }
                }
            )
        });
    }
}