import { Component } from '@angular/core';
import home from '@iconify/icons-ion/home';

@Component({
	selector: 'app-profile',
	template: `
		<section
			class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4"
		>
			<p class="text-white">
				profile works! <ic-icon [icon]="homeIcon"></ic-icon>
			</p>
		</section>
	`,
	styles: []
})
export class ProfileComponent {
	homeIcon = home;
}
