import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyConfirmComponent } from './component/my-confirm.component';

@Injectable({
	providedIn: 'root'
})
export class MyConfirm {

	private dialog = inject(MatDialog);

	alert(data: any): Promise<boolean> {

		const comfirmRef = this.dialog.open(MyConfirmComponent, {
			panelClass: 'my-dialog',
			minWidth: '300px',
			autoFocus: false,
			data: {
				type: 'alert',
				title: data.title,
				subTitle: data.subTitle,
				icon: data.icon
			}
		});


		return new Promise((resolve, rejectLa) => {

			comfirmRef.afterClosed().subscribe(result => {
				resolve(result);
			});

		})

	}

	confirm(data: any): Promise<number> {

		const confirmRef = this.dialog.open(MyConfirmComponent, {
			panelClass: 'my-dialog',
			minWidth: '300px',
			autoFocus: false,
			data: {
				type: 'comfirm',
				title: data.title,
				subTitle: data.subTitle,
				icon: data.icon,
				submitBtnText: (data.submitBtnText == undefined) ? '確定' : data.submitBtnText,
				cancelBtnText: (data.cancelBtnText == undefined) ? '取消' : data.cancelBtnText
			}
		});

		return new Promise((resolve, reject) => {

			confirmRef.afterClosed().subscribe(result => {
				if (result == 1) {
					resolve(1);//確定
				} else {
					reject();//取消
				}
			});

		})
	}
}
