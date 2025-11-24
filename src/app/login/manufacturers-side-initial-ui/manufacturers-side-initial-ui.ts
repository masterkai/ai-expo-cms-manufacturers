import { Component, signal } from '@angular/core';

@Component({
	selector: 'app-manufacturers-side-initial-ui',
	imports: [],
	templateUrl: './manufacturers-side-initial-ui.html',
	standalone: true,
	styleUrl: './manufacturers-side-initial-ui.scss'
})
export class ManufacturersSideInitialUi {
	Exclusive_Information = signal<{ value: string; label: string }[]>([
		{
			value: '活動名稱﹕AI-X 跨域。無限2026',
			label: '只讀'
		}, {
			value: '公司/品牌﹕公司名稱',
			label: '只讀'
		}, {
			value: '邀請碼﹕inv-xxxx(已驗證)',
			label: '只讀'
		},

	])
	protected validity_period = signal<string>('2024-01-01 至 2026-12-31');
}
