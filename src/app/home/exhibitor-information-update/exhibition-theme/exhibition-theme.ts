import { Component, signal } from '@angular/core';
import { InputText } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { Button } from "primeng/button";

@Component({
  selector: 'app-exhibition-theme',
	imports: [
		InputText,
		FormsModule,
		Button
	],
  templateUrl: './exhibition-theme.html',
  styleUrl: './exhibition-theme.scss'
})
export class ExhibitionTheme {
	protected value = signal('「以科技連結未來」');

}
