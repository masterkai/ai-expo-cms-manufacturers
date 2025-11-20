import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Terms } from './terms/terms';

@Component({
	selector: 'app-policy',
	imports: [],
	templateUrl: './policy.html',
	styleUrl: './policy.scss'
})
export class Policy {

	private dialog = inject(MatDialog);

	openTerms(){
		this.dialog.open(Terms, {
			panelClass:'my-dialog',
			width:'1000px',
			maxWidth:'90vw',
			autoFocus: false,
		});
	}
}
