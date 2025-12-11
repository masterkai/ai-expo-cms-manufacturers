import { Component, signal, viewChild } from '@angular/core';
import { Button } from "primeng/button";
import { Title } from "../../shared/title/title";
import { CommonDialog } from "../../shared/common-dialog/common-dialog";
import { Checkbox } from "primeng/checkbox";
import { FormsModule } from "@angular/forms";
import { Tag } from "primeng/tag";
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";
import { Confirmation_of_exhibitor_right } from "../../store/home.slice";
import { toObservable } from "@angular/core/rxjs-interop";

@Component({
	selector: 'app-exhibitor-rights-confirmation',
	imports: [
		Button,
		Title,
		CommonDialog,
		Checkbox,
		FormsModule,
		Tag,
		FloatLabel,
		InputText
	],
	templateUrl: './exhibitor-rights-confirmation.html',
	styleUrl: './exhibitor-rights-confirmation.scss'
})
export class ExhibitorRightsConfirmation {
	dialog = viewChild(CommonDialog)
	data: Confirmation_of_exhibitor_right[] = [
		{ itemName: '贊助權益', description: 'Description of Exhibitor Right 1', change_description: '' },
		{ itemName: '議程場次', description: 'Description of Exhibitor Right 2', change_description: '' },
		{ itemName: '攤位資訊', description: 'Description of Exhibitor Right 3', change_description: '' },
		{ itemName: '不知講堂議程', description: 'Description of Exhibitor Right 4', change_description: '' },
		{ itemName: '未來舞台議程', description: 'Description of Exhibitor Right 5', change_description: '' },
		{ itemName: '媒體廣宣', description: 'Description of Exhibitor Right 6', change_description: '' },
	]
	protected selectedItemName = signal<Confirmation_of_exhibitor_right[]>([]);

	constructor() {
		toObservable(this.selectedItemName).subscribe({
			next: (selectedItems) => {
				console.log('Selected Items:', selectedItems);
			},
			error: (err) => console.error('Error in selected items observable:', err)
		})
	}

	handleClick() {
		this.dialog()?.onOpen()
	}
}
