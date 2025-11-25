import { Component, signal } from '@angular/core';
import { Button } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";
import { ManufacturersSideInitialUi } from "../manufacturers-side-initial-ui/manufacturers-side-initial-ui";
import { RouterLink } from "@angular/router";

@Component({
	selector: 'app-sign-in',
	imports: [
		Button,
		FormsModule,
		FloatLabel,
		InputText,
		ManufacturersSideInitialUi,
		RouterLink
	],
	templateUrl: './sign-in.html',
	styleUrl: './sign-in.scss'
})
export class SignIn {
	email_value = signal('')
	password_value = signal('')
}
