import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { RouterLink } from "@angular/router";

@Component({
	selector: 'app-welcome',
	imports: [
		Button,
		RouterLink
	],
	standalone: true,
	templateUrl: './welcome.html',
	styleUrl: './welcome.scss'
})
export class Welcome {

}
