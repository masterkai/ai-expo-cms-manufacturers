import { Component, inject, signal } from '@angular/core';
import { Button } from "primeng/button";
import { MyConfirm } from "../../shared/module/my-confirm/my-confirm.service";

@Component({
	selector: 'app-contact-person',
	imports: [
		Button
	],
	templateUrl: './contact-person.html',
	styleUrl: './contact-person.scss'
})
export class ContactPerson {
	myConfirm = inject(MyConfirm)
	contact_person = signal({
		name: '王曉明',
		email: 'ming@vendor.com',
		phone: '0900000000',
		position: 'PM',
		office_phone: '02-12345678'
	})

	showConfirm() {
		this.myConfirm.confirm({
			title: 'Confirm Action',
			subTitle: 'Are you sure?',
			icon: 'warning'
		}).then(() => {
			// User confirmed
		}).catch(() => {
			// User cancelled
		});
	}
}
