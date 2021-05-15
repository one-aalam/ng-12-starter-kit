import { Component } from '@angular/core';
import home from '@iconify/icons-ion/home';

@Component({
	selector: 'app-header',
	template: `<p>header works! <ic-icon [icon]="homeIcon"></ic-icon></p> `,
	styles: []
})
export class HeaderComponent {
	homeIcon = home;
}
