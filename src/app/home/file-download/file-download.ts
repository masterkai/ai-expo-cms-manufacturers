import { Component } from '@angular/core';
import { Slider } from "primeng/slider";
import { Button } from "primeng/button";
import { Tag } from "primeng/tag";

@Component({
	selector: 'app-file-download',
	imports: [
		Slider,
		Button,
		Tag
	],
	templateUrl: './file-download.html',
	styleUrl: './file-download.scss'
})
export class FileDownload {

}
