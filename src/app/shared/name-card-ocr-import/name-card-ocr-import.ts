import { Component, inject } from '@angular/core';
import { NameCardOcr } from "../../services/name-card-ocr";
import { TableModule } from "primeng/table";
import { ImageUpload } from "../image-upload/image-upload";

@Component({
	selector: 'app-name-card-ocr-import',
	imports: [
		TableModule,
		ImageUpload
	],
	templateUrl: './name-card-ocr-import.html',
	styleUrl: './name-card-ocr-import.scss'
})
export class NameCardOcrImport {
	dataService = inject(NameCardOcr)
	nameCardData: Array<INameCardOcrImport> = [];
	selectedNameCardOCRData: Array<INameCardOcrImport> = [];

	async ngOnInit() {
		this.nameCardData = await this.dataService.getNameCardData();
	}

	handleCheckboxChange(event: any, item: INameCardOcrImport) {
		if (event.checked) {
			this.selectedNameCardOCRData.push(item);
		} else {
			this.selectedNameCardOCRData = this.selectedNameCardOCRData.filter(i => i.columnName !== item.columnName);
		}
	}
}

export interface INameCardOcrImport {
	columnName: string,
	value: string,
	source: string
}
