import { Component } from '@angular/core';
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";

@Component({
	selector: 'app-contact-person-form',
	imports: [
		FloatLabel,
		InputText
	],
	templateUrl: './contact-person-form.html',
	styleUrl: './contact-person-form.scss'
})
export class ContactPersonForm {

}
