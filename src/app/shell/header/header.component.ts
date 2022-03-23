import { AfterViewChecked, Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { MenuItem } from 'primeng/api';

@Component({
    selector: 'bp-header-component',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, AfterViewChecked {
    public pretrad: string;
    public display: boolean;
    private navEvent: NavigationEnd;
    public items: MenuItem[];
    public menuItems: MenuItem[];
    public activeItem: MenuItem;

    public isScrolled: boolean;
    public isMainPage: boolean;

    constructor(
        private router: Router,
        private translateService: TranslateService
    ) {
        this.pretrad = 'SHELL.HEADER.';
        this.display = true;
        this.menuItems = [];

        this.isMainPage = false;
        this.isScrolled = document.documentElement.scrollTop === 0 ? false : true;
    }

    @HostListener('window:scroll', ['$event'])
    private onScroll(event: Event): void {
        this.isScrolled = document.documentElement.scrollTop === 0 ? false : true;
    }

    public ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd && (event.url.includes('/landing-page/') || (
                event.urlAfterRedirects !== null &&
                event.urlAfterRedirects.includes('landing-page')))
            ) {
                this.display = false;
                this.navEvent = event;

                this.translateService.onLangChange.subscribe(() => {
                    this.menuItems = [
                        {label: this.translateService.instant(`${this.pretrad}LANDING-PAGE.MENU.BEING-REASON`), routerLink: '/landing-page/main', command: this.processBeingReason},
                        {label: this.translateService.instant(`${this.pretrad}LANDING-PAGE.MENU.JEWELERY`), routerLink: '/landing-page/jewelery'}
                    ];
                });
                document.documentElement.scrollTop = 0;
                this.isMainPage = event.url.includes('main') || event.urlAfterRedirects.includes('main') || event.url.includes('/services/') ? true : false;
            }
        });

        this.getMenuItems();
    }

    public processBeingReason(): void {
        setTimeout(() => {
            document.getElementById('beingReason').scrollIntoView();
            document.documentElement.scrollTop -= 120;
        }, 0);
    }

    public ngAfterViewChecked(): void {
        if(document.getElementById('lp-header') !== null)
            this.processLpHeader();
    }

    public getMenuItems(): void {
        this.items = [
            {label: 'JOAILLERIE'},
            {label: 'FIANCAILLES'},
            {label: 'MARIAGE'},
            {label: 'BEE PARIS'},
            {label: 'BOUTIQUE'},
            {label: 'FEED'},
            {label: 'NOTRE RAISON D\'ETRE'}
        ];
    }

    public onSelectItem(item: any): void {
        console.log(item);
    }

    private processLpHeader(): void {
        const header = document.getElementById('lp-header');
        if(this.navEvent.url.includes('/main')) {
            header.classList.add('cs-lp-header-transparent');
            header.classList.remove('cs-lp-header-background');
        } else {
            header.classList.add('cs-lp-header-background');
            header.classList.remove('cs-lp-header-transparent');
        }
    }

    public basket(): void {
        this.router.navigate(['/landing-page/basket']);
    }

    private isOnMobile(): boolean {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
        return check;
    }

    public phone(): void {
        if(this.isOnMobile()) {
            window.location.href = 'https://api.whatsapp.com/send?phone=0614836310&text='
                + encodeURIComponent('');
        } else {
            window.open('https://api.whatsapp.com/send?phone=0614836310&text=', '_blank')
        }
    }
}