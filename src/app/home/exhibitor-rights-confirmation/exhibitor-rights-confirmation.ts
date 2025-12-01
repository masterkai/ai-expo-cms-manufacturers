import { Component } from '@angular/core';
import { Button } from "primeng/button";

@Component({
	selector: 'app-exhibitor-rights-confirmation',
	imports: [
		Button
	],
	templateUrl: './exhibitor-rights-confirmation.html',
	styleUrl: './exhibitor-rights-confirmation.scss'
})
export class ExhibitorRightsConfirmation {
	data = [
		{ itemName: 'Exhibitor Right 1', description: 'Description of Exhibitor Right 1' },
		{ itemName: 'Exhibitor Right 2', description: 'Description of Exhibitor Right 2' },
		{ itemName: 'Exhibitor Right 3', description: 'Description of Exhibitor Right 3' },
	]
}
