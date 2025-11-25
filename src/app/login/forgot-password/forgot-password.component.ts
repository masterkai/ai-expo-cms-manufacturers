import { Component, signal } from '@angular/core';
import { FloatLabel } from "primeng/floatlabel";
import { FormsModule } from "@angular/forms";
import { InputText } from "primeng/inputtext";
import { ManufacturersSideInitialUi } from "../manufacturers-side-initial-ui/manufacturers-side-initial-ui";
import { RouterLink } from "@angular/router";
import { Button } from "primeng/button";

@Component({
	selector: 'app-forgot-password',
	imports: [
		FloatLabel,
		FormsModule,
		InputText,
		ManufacturersSideInitialUi,
		RouterLink,
		Button
	],
	templateUrl: './forgot-password.component.html',
	styleUrl: './forgot-password.component.scss'
})
export class ForgotPassword {
	email_value = signal<string>('')
}
