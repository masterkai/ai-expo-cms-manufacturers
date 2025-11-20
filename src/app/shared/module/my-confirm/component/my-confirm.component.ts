import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
	selector: 'app-my-confirm',
	standalone: false,
	templateUrl: './my-confirm.component.html',
	styleUrls: ['./my-confirm.component.scss'],
	encapsulation: ViewEncapsulation.None, //讓innerHtml裡可以跑style
})

export class MyConfirmComponent {

	constructor(
		public dialogRef: MatDialogRef<MyConfirmComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
	}


	sure(): void {
		this.dialogRef.close(1);
	}

	cancel(): void {
		this.dialogRef.close(0);
	}
}