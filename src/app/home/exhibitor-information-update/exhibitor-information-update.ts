import { Component, signal, viewChild } from '@angular/core';
import { Title } from "../../shared/title/title";
import { Tag } from "primeng/tag";
import { MessageService } from "primeng/api";
import { Toast } from "primeng/toast";
import { FileUpload, FileUploadEvent } from "primeng/fileupload";
import { CommonDialog } from "../../shared/common-dialog/common-dialog";
import { ExhibitionTheme } from "./exhibition-theme/exhibition-theme";
import { ExhibitionHighlights } from "./exhibition-highlights/exhibition-highlights";

@Component({
	selector: 'app-exhibitor-information-update',
	imports: [
		Title,
		Tag,
		Toast,
		FileUpload,
		CommonDialog,
		ExhibitionTheme,
		ExhibitionHighlights
	],
	templateUrl: './exhibitor-information-update.html',
	styleUrl: './exhibitor-information-update.scss',
	providers: [ MessageService ]
})
export class ExhibitorInformationUpdate {
	dialog = viewChild(CommonDialog)
	operationMode = signal<OperationMode>('exhibition-theme');
	exhibitionTheme = signal('「以科技連結未來」');
	exhibitionHighlights = signal([
		{
			highlight: '展示最新科技產品與解決方案',
			detail: '參觀者將有機會親身體驗前沿科技，了解其應用場景與未來發展趨勢。'
		},
		{
			highlight: '邀請國際知名科技公司與新創企業參展',
			detail: '這些企業將分享其成功經驗與技術突破，激發更多創新思維。'
		},
		{
			highlight: '舉辦多場專題講座與工作坊',
			detail: '參加者可深入了解行業動態，提升專業知識與技能。'
		},
		{
			highlight: '提供交流平台',
			detail: '透過面對面交流，建立商業夥伴關係，共同探索合作機會。'
		},
		{
			highlight: '展示綠色科技與可持續發展解決方案',
			detail: '強調科技在環境保護中的角色，促進可持續發展目標的實現。'
		},
		{
			highlight: '設置創新展示區',
			detail: '這些展示將啟發參觀者的創新思維，激發對未來科技的想像力。'
		},
		{
			highlight: '提供實時互動體驗',
			detail: '透過互動展品，提升參觀者的參與感與體驗感。'
		}
	]);
	uploadedFiles1: any[] = [];
	uploadedFiles2: any[] = [];
	uploadedFiles3: any[] = [];
	uploadedFiles4: any[] = [];
	currentOperationModeTitle = signal<OperationModeTitle>('上傳演講者照片')

	constructor(private messageService: MessageService) {
	}

	openDialog() {
		this.dialog()?.onOpen();
	}

	handleOperationModeChange(mode: OperationMode) {
		this.operationMode.set(mode);
	}

	handleOperationModeTitleChange(title: OperationModeTitle) {
		this.currentOperationModeTitle.set(title);
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

type OperationMode = 'exhibition-highlights' | 'exhibition-theme' | 'upload-speakers-photo';
type OperationModeTitle = '編輯展會亮點' | '編輯展會主題' | '上傳演講者照片';

