import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Ripple } from "primeng/ripple";
import { Steps_Chinese } from "../../store/home.slice";
import { Steps } from "primeng/steps";

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
	steps = Steps
	steps_Chinese = Steps_Chinese;
	protected readonly Steps_Chinese = Steps_Chinese;
}
