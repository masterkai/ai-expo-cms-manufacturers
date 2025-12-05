import { Component, signal, viewChild } from '@angular/core';
import { Button } from "primeng/button";
import { TableModule } from "primeng/table";
import { CommonDialog } from "../../../shared/common-dialog/common-dialog";
import { AddSpeakerForm } from "./add-speaker-form/add-speaker-form";

@Component({
	selector: 'app-speakers-list',
	imports: [
		Button,
		TableModule,
		CommonDialog,
		AddSpeakerForm
	],
	templateUrl: './speakers-list.html',
	styleUrl: './speakers-list.scss'
})
export class SpeakersList {
	dialog = viewChild(CommonDialog)
	speakers = signal([
		{
			name: '張三',
			jobTitle: '資深工程師',
			updateTime: '2024-05-01 10:00',
			speakerIntroduction: '張三擁有超過10年的軟體開發經驗，專注於前端技術與用戶體驗設計。'
		},
		{
			name: '李四',
			jobTitle: '產品經理',
			updateTime: '2024-05-02 14:30',
			speakerIntroduction: '李四在產品管理領域有豐富的經驗，善於協調跨部門合作，推動產品從概念到上市。'
		},
		{
			name: '王五',
			jobTitle: '數據科學家',
			updateTime: '2024-05-03 09:15',
			speakerIntroduction: '王五專注於大數據分析與機器學習，致力於將數據轉化為有價值的商業洞察。'
		},
		{
			name: '趙六',
			jobTitle: '創業家',
			updateTime: '2024-05-04 11:45',
			speakerIntroduction: '趙六是一位成功的創業家，曾創立多家科技公司，對創新與市場趨勢有深刻見解。'
		},
		{
			name: '孫七',
			jobTitle: 'UI/UX設計師',
			updateTime: '2024-05-05 16:20',
			speakerIntroduction: '孫七專注於用戶界面與用戶體驗設計，致力於創造直觀且吸引人的數字產品。'
		}
	])

	protected editSpeaker(speaker: any) {
		
	}

	protected deleteSpeaker(speaker: any) {
		
	}

	protected openAddSpeakerDialog() {
		this.dialog()?.onOpen();
	}
}
