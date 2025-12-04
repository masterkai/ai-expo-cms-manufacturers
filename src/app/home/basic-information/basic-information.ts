import { Component, viewChild } from '@angular/core';
import { Button } from "primeng/button";
import { InputGroup } from "primeng/inputgroup";
import { InputText } from "primeng/inputtext";
import { InputGroupAddon } from "primeng/inputgroupaddon";
import { FloatLabel } from "primeng/floatlabel";
import { Title } from "../../shared/title/title";
import { CommonDialog } from "../../shared/common-dialog/common-dialog";
import { NameCardOcrImport } from "../../shared/name-card-ocr-import/name-card-ocr-import";

@Component({
	selector: 'app-basic-information',
	imports: [
		Button,
		InputGroup,
		InputText,
		InputGroupAddon,
		FloatLabel,
		Title,
		CommonDialog,
		NameCardOcrImport
	],
	templateUrl: './basic-information.html',
	styleUrl: './basic-information.scss'
})
export class BasicInformation {
	dialog = viewChild(CommonDialog)

	handleOpenDialog() {
		this.dialog()?.onOpen();
	}
}
