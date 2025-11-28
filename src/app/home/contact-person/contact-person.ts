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
		name: '王曉明',
		email: 'ming@vendor.com',
		phone: '0900000000',
		position: 'PM',
		office_phone: '02-12345678'
	})
}
