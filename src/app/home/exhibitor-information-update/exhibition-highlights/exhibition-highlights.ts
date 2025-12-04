import { Component, input, signal } from '@angular/core';
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";
import { Textarea } from "primeng/textarea";
import { Button } from "primeng/button";
import { HighLight } from "../exhibitor-information-update";
import { NgClass } from "@angular/common";

@Component({
	selector: 'app-exhibition-highlights',
	imports: [
		FloatLabel,
		InputText,
		Textarea,
		Button,
		NgClass
	],
	templateUrl: './exhibition-highlights.html',
	styleUrl: './exhibition-highlights.scss'
})
export class ExhibitionHighlights {
	data = input.required<HighLight[]>();
	addOrEditMode = signal<AddOrEditMode>('off');

	toggleAddOrEditMode() {
		this.addOrEditMode.set(this.addOrEditMode() === 'off' ? 'on' : 'off');
	}
}

type AddOrEditMode = 'on' | 'off';
