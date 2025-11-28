import { Component, signal, viewChild } from '@angular/core';
import { Button } from "primeng/button";
import { CommonDialog } from "../../shared/common-dialog/common-dialog";

@Component({
	selector: 'app-contact-person',
	imports: [
		Button,
		CommonDialog
	],
	templateUrl: './contact-person.html',
	standalone: true,
	styleUrl: './contact-person.scss'
})
export class ContactPerson {
	commonDialog = viewChild(CommonDialog)

	contact_person = signal({
		name: '王曉明',
		email: 'ming@vendor.com',
		phone: '0900000000',
		position: 'PM',
		office_phone: '02-12345678'
	})

	showConfirm() {
		const dialog = this.commonDialog();
		if (dialog) dialog.onOpen();

	}
}
