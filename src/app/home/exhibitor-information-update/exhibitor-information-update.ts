import { Component } from '@angular/core';
import { Title } from "../../shared/title/title";
import { Tag } from "primeng/tag";
import { MessageService } from "primeng/api";
import { Toast } from "primeng/toast";
import { FileUpload, FileUploadEvent } from "primeng/fileupload";

@Component({
	selector: 'app-exhibitor-information-update',
	imports: [
		Title,
		Tag,
		Toast,
		FileUpload
	],
	templateUrl: './exhibitor-information-update.html',
	styleUrl: './exhibitor-information-update.scss',
	providers: [ MessageService ]
})
export class ExhibitorInformationUpdate {
	uploadedFiles1: any[] = [];
	uploadedFiles2: any[] = [];
	uploadedFiles3: any[] = [];
	uploadedFiles4: any[] = [];

	constructor(private messageService: MessageService) {
	}

	onUpload(event: FileUploadEvent) {
		for (let file of event.files) {
			this.uploadedFiles1.push(file);
		}

		this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
	}

	protected onUploadDiv2($event: FileUploadEvent) {
		for (let  file of $event.files) {
			this.uploadedFiles2.push(file);
		}

		this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
	}

	protected onUploadDiv3($event: FileUploadEvent) {
		for (let  file of $event.files) {
			this.uploadedFiles3.push(file);
		}

		this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });

	}

	protected onUploadDiv4($event: FileUploadEvent) {
		for (let  file of $event.files) {
			this.uploadedFiles4.push(file);
		}

		this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });

	}
}
