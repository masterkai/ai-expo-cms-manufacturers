import { Component, signal } from '@angular/core';
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { Button } from "primeng/button";
import { Textarea } from "primeng/textarea";

@Component({
  selector: 'app-add-speaker-form',
	imports: [
		FloatLabel,
		InputText,
		FormsModule,
		Button,
		Textarea
	],
  templateUrl: './add-speaker-form.html',
  styleUrl: './add-speaker-form.scss'
})
export class AddSpeakerForm {
	speaker_name = signal('');
	speaker_job_title = signal('');
	speaker_introduction = signal('');
}
