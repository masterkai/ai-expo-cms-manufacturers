import { Component, signal } from '@angular/core';
import { Button } from "primeng/button";
import { FloatLabel } from "primeng/floatlabel";
import { FormsModule } from "@angular/forms";
import { InputText } from "primeng/inputtext";
import { ManufacturersSideInitialUi } from "../manufacturers-side-initial-ui/manufacturers-side-initial-ui";

@Component({
	selector: 'app-reset-password',
	imports: [
		Button,
		FloatLabel,
		FormsModule,
		InputText,
		ManufacturersSideInitialUi
	],
	templateUrl: './reset-password.html',
	styleUrl: './reset-password.scss'
})
export class ResetPassword {
	password_value = signal('')
	confirm_password_value = signal('')
}
