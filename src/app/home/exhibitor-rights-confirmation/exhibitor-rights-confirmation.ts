import { Component, signal, viewChild } from '@angular/core';
import { Button } from "primeng/button";
import { Title } from "../../shared/title/title";
import { CommonDialog } from "../../shared/common-dialog/common-dialog";
import { Checkbox } from "primeng/checkbox";
import { FormsModule } from "@angular/forms";

@Component({
	selector: 'app-exhibitor-rights-confirmation',
	imports: [
		Button,
		Title,
		CommonDialog,
		Checkbox,
		FormsModule
	],
	templateUrl: './exhibitor-rights-confirmation.html',
	styleUrl: './exhibitor-rights-confirmation.scss'
})
export class ExhibitorRightsConfirmation {
	dialog = viewChild(CommonDialog)
	data:Data[] = [
		{ itemName: 'Exhibitor Right 1', description: 'Description of Exhibitor Right 1' },
		{ itemName: 'Exhibitor Right 2', description: 'Description of Exhibitor Right 2' },
		{ itemName: 'Exhibitor Right 3', description: 'Description of Exhibitor Right 3' },
	]
	protected selectedItemName = signal<Data[]>([]);
	handleClick() {
		this.dialog()?.onOpen()
	}
}

interface Data {
	itemName: string;
	description: string;
}
