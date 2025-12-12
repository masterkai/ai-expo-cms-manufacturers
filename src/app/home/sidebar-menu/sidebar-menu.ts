import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Ripple } from "primeng/ripple";
import { Steps, Steps_Chinese } from "../../store/home.slice";

import { HomeStore } from "../../store/home.store";

@Component({
	selector: 'app-sidebar-menu',
	imports: [
		RouterLink,
		RouterLinkActive,
		Ripple
	],
	templateUrl: './sidebar-menu.html',
	styleUrl: './sidebar-menu.scss'
})
export class SidebarMenu {
	readonly homeStore = inject(HomeStore)
	steps = Steps
	steps_Chinese = Steps_Chinese;
	protected readonly Steps_Chinese = Steps_Chinese;
}
