import { Component } from '@angular/core';
import { SpeakersList } from "../exhibitor-information-update/speakers-list/speakers-list";
import { Title } from "../../shared/title/title";

@Component({
	selector: 'app-speaker-info',
	imports: [
		SpeakersList,
		Title
	],
	templateUrl: './speaker-info.html',
	styleUrl: './speaker-info.scss'
})
export class SpeakerInfo {

}
