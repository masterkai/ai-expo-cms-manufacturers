import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Ripple } from "primeng/ripple";

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

}
