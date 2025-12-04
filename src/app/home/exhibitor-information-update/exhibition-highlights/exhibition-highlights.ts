import { Component, signal } from '@angular/core';
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";
import { Textarea } from "primeng/textarea";
import { Button } from "primeng/button";
import { HighLight } from "../exhibitor-information-update";
import { NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
	selector: 'app-exhibition-highlights',
	imports: [
		FloatLabel,
		InputText,
		Textarea,
		Button,
		NgClass,
		FormsModule
	],
	templateUrl: './exhibition-highlights.html',
	styleUrl: './exhibition-highlights.scss'
})
export class ExhibitionHighlights {
	data = signal<HighLight[]>([
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
	addOrEditMode = signal<AddOrEditMode>('off');

	toggleAddOrEditMode() {
		this.addOrEditMode.set(this.addOrEditMode() === 'off' ? 'on' : 'off');
	}
	// Additional methods for adding, editing, and saving highlights can be implemented here
	// depending on the application's requirements.
	deleteHighlight(index: number) {
		const currentData = this.data();
		currentData.splice(index, 1);
		this.data.set([...currentData]);
	}
	addHighlight() {
		const currentData = this.data();
		currentData.push({ highlight: '', detail: '' });
		this.data.set([...currentData]);
	}
}

type AddOrEditMode = 'on' | 'off';
