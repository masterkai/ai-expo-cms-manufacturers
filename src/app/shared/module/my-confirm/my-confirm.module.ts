import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyConfirmComponent } from './component/my-confirm.component';
import { MyConfirm } from './my-confirm.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [MyConfirmComponent],
	imports: [
		CommonModule,
		MatDialogModule,
		MatButtonModule
	],
	providers: [{ provide: 'MyConfirm', useClass: MyConfirm }], //standalone要這樣來讓service綁定模組
})

export class MyConfirmModule {
}
