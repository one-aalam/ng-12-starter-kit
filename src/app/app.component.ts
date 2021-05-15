import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	template: `
        <app-profile></app-profile>
        <div class="content">
            <span>{{ title }} app is running!</span>
            <div>
                <h2>{{ 'HOME.TITLE' | translate }}</h2>
                <label>
                    {{ 'HOME.SELECT' | translate }}
                    <select attr="'HOME.SELECT' | translate">
                        <option
                            *ngFor="let lang of translate.getLangs()"
                            [value]="lang"
                            [selected]="lang === translate.currentLang"
                        >
                            {{ lang }}
                        </option>
                    </select>
                    <div translate>HOME.SELECT</div>
                </label>
            </div>
        </div>
        <router-outlet></router-outlet>
	`
})
export class AppComponent {
    title = 'ng-starter-kit'
	constructor(public translate: TranslateService) {
		translate.addLangs(['en', 'fr']);
		translate.setDefaultLang('fr');

		translate
			.get('HOME.TITLE', { value: 'world' })
			.subscribe((res: string) => {
				console.log(res);
				//= > 'hello world'
			});

		const browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
	}
}
