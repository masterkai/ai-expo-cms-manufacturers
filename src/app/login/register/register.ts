import { Component, signal } from '@angular/core';
import { Button } from "primeng/button";
import { RouterLink } from "@angular/router";
import { InputText } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { FloatLabel } from "primeng/floatlabel";
import { Checkbox } from "primeng/checkbox";
import { ManufacturersSideInitialUi } from "../manufacturers-side-initial-ui/manufacturers-side-initial-ui";

@Component({
	selector: 'app-register',
	imports: [
		Button,
		RouterLink,
		InputText,
		FormsModule,
		FloatLabel,
		Checkbox,
		ManufacturersSideInitialUi
	],
	standalone: true,
	templateUrl: './register.html',
	styleUrl: './register.scss'
})
export class Register {

	protected email_value = signal<string>('');
	protected password_value = signal<string>('');
	protected confirm_password_value = signal<string>('');
	protected agree_value = signal<string[]>([]);
}
