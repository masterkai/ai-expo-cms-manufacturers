import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class NameCardOcr {
	name_card_data = [
		{
			columnName: '姓名',
			value: '王小明',
			source: 'ocr'
		},
		{
			columnName: '職稱',
			value: '專案經理',
			source: 'ocr'
		},
		{
			columnName: '公司名稱',
			value: '科技有限公司',
			source: 'ocr'
		},
		{
			columnName: '電子郵件',
			value: 'john.dow@example.com',
			source: 'ocr'
		},
		{
			columnName: '公司市話',
			value: '02-12345678',
			source: 'ocr'
		},
		{
			columnName: '手機',
			value: '0900-000-000',
			source: 'ocr'
		}
	]

	async getNameCardData() {
		return this.name_card_data;
	}
}
