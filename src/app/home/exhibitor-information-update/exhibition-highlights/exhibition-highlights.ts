import { Component } from '@angular/core';
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";
import { Textarea } from "primeng/textarea";
import { Button } from "primeng/button";

@Component({
  selector: 'app-exhibition-highlights',
	imports: [
		FloatLabel,
		InputText,
		Textarea,
		Button
	],
  templateUrl: './exhibition-highlights.html',
  styleUrl: './exhibition-highlights.scss'
})
export class ExhibitionHighlights {

}
