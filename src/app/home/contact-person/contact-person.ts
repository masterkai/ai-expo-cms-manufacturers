import { Component, signal } from '@angular/core';
import { Button } from "primeng/button";

@Component({
	selector: 'app-contact-person',
	imports: [
		Button
	],
	templateUrl: './contact-person.html',
	styleUrl: './contact-person.scss'
})
export class ContactPerson {
	contact_person = signal({
		name: '',
		email: '',
		phone: '',
		position: '',
		office_phone: ''
	})
}
