import { Component, signal, viewChild } from '@angular/core';
import { Button } from "primeng/button";
import { CommonDialog } from "../../shared/common-dialog/common-dialog";
import { NameCard } from "./name-card/name-card";
import { ContactPersonForm } from "./contact-person-form/contact-person-form";

@Component({
	selector: 'app-contact-person',
	imports: [
		Button,
		CommonDialog,
		NameCard,
		ContactPersonForm
	],
	templateUrl: './contact-person.html',
	standalone: true,
	styleUrl: './contact-person.scss'
})
export class ContactPerson {
	commonDialog = viewChild(CommonDialog)
	operation_mode = signal<'view' | 'edit'>('view')
	contact_person = signal({
		name: '王曉明',
		email: 'ming@vendor.com',
		phone: '0900000000',
		position: 'PM',
		office_phone: '02-12345678'
	})

	showDialogue() {
		const dialog = this.commonDialog();
		if (dialog) dialog.onOpen();

	}

	handleOperationModeChange(mode: 'view' | 'edit') {
		this.operation_mode.set(mode);
	}
}
