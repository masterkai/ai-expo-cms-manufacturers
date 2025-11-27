import { Component } from '@angular/core';
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";
import { Button } from "primeng/button";

@Component({
	selector: 'app-contact-person',
	imports: [
		FloatLabel,
		InputText,
		Button
	],
	templateUrl: './contact-person.html',
	styleUrl: './contact-person.scss'
})
export class ContactPerson {

}
