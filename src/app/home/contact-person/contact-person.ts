import { Component, inject, signal, viewChild } from '@angular/core';
import { Button } from "primeng/button";
import { CommonDialog } from "../../shared/common-dialog/common-dialog";
import { NameCard } from "./name-card/name-card";
import { ContactPersonForm } from "./contact-person-form/contact-person-form";
import { MyConfirm } from "../../shared/module/my-confirm/my-confirm.service";
import { NameCardOcrImport } from "../../shared/name-card-ocr-import/name-card-ocr-import";
import { Title } from "../../shared/title/title";

@Component({
	selector: 'app-contact-person',
	imports: [
		Button,
		CommonDialog,
		NameCard,
		ContactPersonForm,
		NameCardOcrImport,
		Title
	],
	templateUrl: './contact-person.html',
	standalone: true,
	styleUrl: './contact-person.scss'
})
export class ContactPerson {
	commonDialog = viewChild(CommonDialog)
	operation_mode = signal<OperationMode>('view')
	myConfirm = inject(MyConfirm)
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

	handleOperationModeChange(mode: OperationMode) {
		this.operation_mode.set(mode);
	}

	handleDelete() {
		this.myConfirm.confirm({
			title: '确定要删除此联系人吗？',
			icon: 'alert',
		}).then(
			result => {


			},
			cancel => {
				return false;
			}
		)
	}
}

export type OperationMode = 'view' | 'edit' | 'ocr';